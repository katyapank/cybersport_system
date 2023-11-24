package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.repository.MatchRepository;
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

    public void addMatch(Match match){
        matchRepository.save(match);
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

}
