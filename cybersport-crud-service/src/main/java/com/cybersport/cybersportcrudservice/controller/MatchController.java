package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.service.MatchService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/match")
public class MatchController {
    @Autowired
    private MatchService matchService;
    @GetMapping
    public List<Match> getAllMatches(){
        return matchService.getAllMatches();
    }
    @GetMapping("/{match_id}")
    public Match getMatchById(@PathVariable("match_id") UUID match_id){
        return matchService.getMatchById(match_id);
    }
    @PostMapping
    public UUID addMatch(@RequestBody @Valid Match match){ return matchService.addMatch(match);}

    @DeleteMapping("/{match_id}")
    public void deleteMatch(@PathVariable("match_id") UUID match_id){
        matchService.deleteMatch(match_id);
    }

    @PutMapping("/{match_id}/ended")
    public Match updateMatchEnded(@PathVariable("match_id") UUID match_id){
        return matchService.updateMatchEnded(match_id);
    }

    @PutMapping("/{match_id}")
    public Match updateMatch(@PathVariable("match_id") UUID match_id, @RequestBody @Valid Match match){
        return matchService.updateMatch(match_id, match);
    }
}
