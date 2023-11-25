package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.configs.LocalDateTypeAdapter;
import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.entity.Tournament;
import com.cybersport.cybersportcrudservice.entity.dto.MatchDto;
import com.cybersport.cybersportcrudservice.entity.enums.TournamentStage;
import com.cybersport.cybersportcrudservice.repository.MatchRepository;
import com.cybersport.cybersportcrudservice.repository.TournamentRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class TournamentService {
    @Autowired
    TournamentRepository tournamentRepository;
    @Autowired
    MatchRepository matchRepository;

    public List<Tournament> getAllTournaments(){return tournamentRepository.findAll(); }
@Transactional
    public Tournament getTournamentById(UUID tournament_id){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()->new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        Gson gson = new GsonBuilder()
            .registerTypeAdapter(LocalDate.class, new LocalDateTypeAdapter())
            .create();
        tournamentTemp.setTournamentMatrix(gson.toJson(getAllMatchesByTournamentId(tournament_id)));
        return tournamentTemp;
    }

    @Transactional
    public UUID addTournament(Tournament tournament){
        /*Map<TournamentStage, LocalDate> tournamentDates = new HashMap<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate Now = LocalDate.parse(LocalDate.now().format(formatter));
        Now = LocalDate.now();
        tournamentDates.put(TournamentStage.ACCEPTINGaPPLICATIONS, Now);
        tournament.setTournamentDates(tournamentDates);*/
        return tournamentRepository.save(tournament).getTournamentId();
    }

    public void addTournamentTeam(UUID tournament_id, Team team){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()->new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        List<Team> Teams = tournamentTemp.getTournamentTeamList();
        Teams.add(team);
        tournamentTemp.setTournamentTeamList(Teams);
    }

    @Transactional
    public ArrayList<MatchDto> getAllMatchesByTournamentId(UUID tournament_id){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()->new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        ArrayList<MatchDto> matches = new ArrayList<>();
        for (Match match : matchRepository.findAll()
             ) {
            if(match.getMatchTournament() == tournamentTemp) {
                MatchDto matchTemp = new MatchDto();
                matchTemp.setMatchDescription(match.getMatchDescription());
                matchTemp.setMatchGame(match.getMatchGame().getGameName());
                matchTemp.setMatchJudge(match.getMatchJudge());
                matchTemp.setMatchId(match.getMatchId());
                matchTemp.setMatchIsEnded(match.getMatchIsEnded());
                matchTemp.setMatchEndDay(match.getMatchEndDay());
                matchTemp.setMatchResultFeaturesTeam1(match.getMatchResultFeaturesTeam1());
                matchTemp.setMatchResultFeaturesTeam2(match.getMatchResultFeaturesTeam2());
                matchTemp.setMatchTeam1(match.getMatchTeam1().getTeamName());
                matchTemp.setMatchTeam2(match.getMatchTeam2().getTeamName());
                matchTemp.setMatchScoreTeam1(match.getMatchScoreTeam1());
                matchTemp.setMatchScoreTeam2(match.getMatchScoreTeam2());
                matchTemp.setMatchName(match.getMatchName());
                matchTemp.setMatchWinner(match.getMatchWinner());
                matchTemp.setMatchTournament(match.getMatchTournament().getTournamentId());
                matchTemp.setMatchStartDay(match.getMatchStartDay());
                matches.add(matchTemp);
            }
        }
        return matches;
    }

    /*public List<Team> getTournamentTable(UUID tournament_id){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()->new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        List<Match> matches = getAllMatchesByTournamentId(tournament_id);



    }*/

    public void deleteTournament(UUID tournament_id){
        tournamentRepository.delete(tournamentRepository.findById(tournament_id).orElseThrow(()-> new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists")));
    }

    @Transactional
    public Tournament updateTournament(UUID tournament_id, Tournament tournament){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()-> new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        tournamentTemp.setTournamentGame(tournament.getTournamentGame());
        tournamentTemp.setTournamentDescription(tournament.getTournamentDescription());
        tournamentTemp.setTournamentDates(tournament.getTournamentDates());
        tournamentTemp.setTournamentJudge(tournament.getTournamentJudge());
        tournamentTemp.setTournamentStage(tournament.getTournamentStage());
        tournamentTemp.setTournamentWinners(tournament.getTournamentWinners());
        tournamentTemp.setTournamentMatrix(tournament.getTournamentMatrix());
        tournamentTemp.setTournamentName(tournament.getTournamentName());
        tournamentTemp.setTournamentStartDay(tournament.getTournamentStartDay());
        tournamentTemp.setTournamentEndDay(tournament.getTournamentEndDay());
        tournamentTemp.setTournamentTeamList(tournament.getTournamentTeamList());
        /*if(!tournament.getTournamentDates().containsKey(tournament.getTournamentStage())){
            Map<TournamentStage, LocalDate> tournamentDates = tournament.getTournamentDates();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate Now = LocalDate.parse(LocalDate.now().format(formatter));
            tournamentDates.put(TournamentStage.ACCEPTINGaPPLICATIONS, Now);
            tournamentTemp.setTournamentDates(tournamentDates);
        }*/
        return tournamentTemp;
    }


    public List<Tournament> getUnfinishedTournaments() {
        ArrayList<Tournament> tournaments = new ArrayList<>();
        for (Tournament tournament : tournamentRepository.findAll()
        ){
            if(tournament.getTournamentStage()!=TournamentStage.TOURNAMENTeNDED){
                tournaments.add(tournament);
            }
        }
        return tournaments;
    }
}
