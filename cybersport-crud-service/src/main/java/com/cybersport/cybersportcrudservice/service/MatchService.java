package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Judge;
import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.dto.MVPDto;
import com.cybersport.cybersportcrudservice.repository.JudgeRepository;
import com.cybersport.cybersportcrudservice.repository.MatchRepository;
import com.cybersport.cybersportcrudservice.repository.TournamentRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class MatchService {
    @Autowired
    MatchRepository matchRepository;
    @Autowired
    JudgeRepository judgeRepository;
    @Autowired
    TournamentRepository tournamentRepository;

    public Optional<Match> getAllMatchesByJudge(String jws){
        int i = jws.lastIndexOf('.');
        String withoutSignature = jws.substring(0, i + 1);
        Claims claims = (Claims) Jwts.parser().parse(withoutSignature).getBody();
        String login = (String) claims.get("login");
        Optional<Judge> judge = judgeRepository.findByJudgeLogin(login);
        return matchRepository.findMatchByJudgeId(judge.get().getJudgeId());
    }
    public List<Match> getAllMatches(){ return matchRepository.findAll(); }

    public Match getMatchById(UUID match_id){
        return matchRepository.findById(match_id).orElseThrow(()-> new IllegalStateException(
                "match with id " + match_id + " does not exists"));
    }

    /*@Transactional
    public String findMVP(UUID match_id){
        MVPDto PlayerList =  matchRepository.findResultMVP(match_id);
        String Res;
        int i, max;
        for (String curW: PlayerList.getGameMetrics()) {

        }

        return Res;
    }*/

    //@Transactional
    public UUID addMatch(Match match){
        //Tournament tournamentTemp = match.getMatchTournament();
        //tournamentTemp.setTournamentMatrix(tournamentTemp.getTournamentMatrix() + new Gson().toJson(match));
        return matchRepository.save(match).getMatchId();
    }

    public void deleteMatch(UUID id){
        matchRepository.delete(matchRepository.findById(id).orElseThrow(()-> new IllegalStateException(
                "match with id " + id + " does not exists")));
    }

    public Match updateMatchEnded(UUID id){
        Match match = matchRepository.findById(id).orElseThrow(()-> new IllegalStateException(
                "match with id " + id + " does not exists"));
        match.setMatchIsEnded(Boolean.TRUE);
        return match;
    }

    @Transactional
    public Match updateMatch(UUID game_id, Match match){
        Match matchTemp = matchRepository.findById(game_id).orElseThrow(()-> new IllegalStateException(
                "match with id " + game_id + " does not exists"));
        matchTemp.setMatchDescription(match.getMatchDescription());
        matchTemp.setMatchEndDay(match.getMatchEndDay());
        matchTemp.setMatchGame(match.getMatchGame());
        matchTemp.setMatchJudge(match.getMatchJudge());
        matchTemp.setMatchName(match.getMatchName());
        matchTemp.setMatchGame(match.getMatchGame());
        matchTemp.setMatchTeam1(match.getMatchTeam1());
        matchTemp.setMatchTeam2(match.getMatchTeam2());
        matchTemp.setMatchScoreTeam1(match.getMatchScoreTeam1());
        matchTemp.setMatchScoreTeam2(match.getMatchScoreTeam2());
        matchTemp.setMatchWinner(match.getMatchWinner());
        matchTemp.setMatchIsEnded(match.getMatchIsEnded());
        matchTemp.setMatchStartDay(match.getMatchStartDay());
        matchTemp.setMatchTournament(match.getMatchTournament());
        matchTemp.setMatchTeam1P1(match.getMatchTeam1P1());
        matchTemp.setMatchTeam1P2(match.getMatchTeam1P2());
        matchTemp.setMatchTeam1P3(match.getMatchTeam1P3());
        matchTemp.setMatchTeam1P4(match.getMatchTeam1P4());
        matchTemp.setMatchTeam1P5(match.getMatchTeam1P5());
        matchTemp.setMatchTeam2P1(match.getMatchTeam2P1());
        matchTemp.setMatchTeam2P2(match.getMatchTeam2P2());
        matchTemp.setMatchTeam2P3(match.getMatchTeam2P3());
        matchTemp.setMatchTeam2P4(match.getMatchTeam2P4());
        matchTemp.setMatchTeam2P5(match.getMatchTeam2P5());
        matchTemp.setMatchMvp(match.getMatchMvp());
        return matchTemp;
    }


}
