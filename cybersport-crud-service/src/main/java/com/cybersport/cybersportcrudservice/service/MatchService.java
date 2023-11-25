package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.repository.MatchRepository;
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
public class MatchService {
    @Autowired
    MatchRepository matchRepository;

    public List<Match> getAllMatches(){ return matchRepository.findAll(); }

    public Match getMatchById(UUID match_id){
        return matchRepository.findById(match_id).orElseThrow(()-> new IllegalStateException(
                "match with id " + match_id + " does not exists"));
    }

    public UUID addMatch(Match match){
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
        matchTemp.setMatchResultFeaturesTeam1(match.getMatchResultFeaturesTeam1());
        matchTemp.setMatchWinner(match.getMatchWinner());
        matchTemp.setMatchIsEnded(match.getMatchIsEnded());
        matchTemp.setMatchStartDay(match.getMatchStartDay());
        matchTemp.setMatchTournament(match.getMatchTournament());
        return matchTemp;
    }


}
