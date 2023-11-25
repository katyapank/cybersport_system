package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.entity.Tournament;
import com.cybersport.cybersportcrudservice.repository.MatchRepository;
import com.cybersport.cybersportcrudservice.repository.TournamentRepository;
import com.google.gson.Gson;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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
        tournamentTemp.setTournamentMatrix(new Gson().toJson(getAllMatchesByTournamentId(tournament_id)));
        return tournamentTemp;
    }

    public UUID addTournament(Tournament tournament){
        return tournamentRepository.save(tournament).getTournamentId();
    }

    @Transactional
    public List<Match> getAllMatchesByTournamentId(UUID tournament_id){
        Tournament tournamentTemp = tournamentRepository.findById(tournament_id).orElseThrow(()->new IllegalStateException(
                "tournament with id " + tournament_id + " does not exists"));
        List<Match> matches = null;
        for (Match match : matchRepository.findAll()
             ) {
            if(match.getMatchTournament() == tournamentTemp)
                matches.add(match);
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
        return tournamentTemp;
    }


}
