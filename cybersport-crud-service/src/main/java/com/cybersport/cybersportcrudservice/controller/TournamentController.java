package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.entity.Team;
import com.cybersport.cybersportcrudservice.entity.Tournament;
import com.cybersport.cybersportcrudservice.entity.dto.MatchDto;
import com.cybersport.cybersportcrudservice.entity.dto.ResultTableDto;
import com.cybersport.cybersportcrudservice.service.TournamentService;
import jakarta.persistence.Tuple;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;
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

    @GetMapping("/table/{tournament_id}")
    public List<ResultTableDto> printResultTable(@PathVariable("tournament_id") UUID tournament_id) {
        return tournamentService.printResultTable(tournament_id);
    }

    @GetMapping("/export/{tournament_id}")
    public void exportResultTable(@PathVariable("tournament_id") UUID tournament_id, HttpServletResponse response) throws IOException {
        tournamentService.exportResultTable(tournament_id, response);
    }

    @PostMapping("/registration/{tournament_id}")
    public ResponseEntity<Team> addTournamentTeam(@PathVariable("tournament_id") UUID tournament_id,
                                                  @RequestBody Map<String, String> token){
        return tournamentService.addTournamentTeam(tournament_id, token);
    }

    @GetMapping("/unfinished")
    public List<Tournament> getUnfinishedTournaments(){return tournamentService.getUnfinishedTournaments();}

    @GetMapping("/{tournament_id}/matches")
    public List<MatchDto> getAllMatchesByTournamentId(@PathVariable("tournament_id") UUID tournament_id){
        return tournamentService.getAllMatchesByTournamentId(tournament_id);
    }

    @GetMapping("/{tournament_id}/table")
    public List<ResultTableDto> getTournamentTable(@PathVariable("tournament_id") UUID tournament_id){
        return tournamentService.getTournamentTable(tournament_id);
    }

    @DeleteMapping("/{tournament_id}")
    public void deleteTournament(@PathVariable("tournament_id") UUID tournament_id){
        tournamentService.deleteTournament(tournament_id);
    }

    @PutMapping("/{tournament_id}")
    public Tournament updateTournament(@PathVariable("tournament_id") UUID tournament_id, @RequestBody @Valid Tournament tournament){
        return tournamentService.updateTournament(tournament_id, tournament);
    }



}
