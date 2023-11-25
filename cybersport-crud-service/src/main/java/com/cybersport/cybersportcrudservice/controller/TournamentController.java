package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.entity.Tournament;
import com.cybersport.cybersportcrudservice.service.TournamentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/tournament")
public class TournamentController {
    @Autowired
    private TournamentService tournamentService;

    @GetMapping
    public List<Tournament> getAllTournaments(){
        return tournamentService.getAllTournaments();
    }

    @GetMapping("/{tournament_id}")
    public Tournament getTournamentById(@PathVariable("tournament_id") UUID tournament_id){
        return tournamentService.getTournamentById(tournament_id);
    }

    @PostMapping
    public UUID addTournament(@RequestBody @Valid Tournament tournament){ return tournamentService.addTournament(tournament);}

    @GetMapping("/{tournament_id}/matches")
    public List<Match> getAllMatchesByTournamentId(@PathVariable("tournament_id") UUID tournament_id){
        return tournamentService.getAllMatchesByTournamentId(tournament_id);
    }

   /* @GetMapping("/{tournament_id}/table")
    public List<Team> getTournamentTable(@PathVariable("tournament_id") UUID tournament_id){
        return tournamentService.getTournamentTable(tournament_id);
    }*/

    @DeleteMapping("/{tournament_id}")
    public void deleteTournament(@PathVariable("tournament_id") UUID tournament_id){
        tournamentService.deleteTournament(tournament_id);
    }

    @PutMapping("/{tournament_id}")
    public Tournament updateTournament(@PathVariable("tournament_id") UUID tournament_id, @RequestBody @Valid Tournament tournament){
        return tournamentService.updateTournament(tournament_id, tournament);
    }



}
