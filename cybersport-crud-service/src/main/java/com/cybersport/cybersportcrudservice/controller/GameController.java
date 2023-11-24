package com.cybersport.cybersportcrudservice.controller;

import com.cybersport.cybersportcrudservice.entity.Game;
import com.cybersport.cybersportcrudservice.entity.Match;
import com.cybersport.cybersportcrudservice.service.GameService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "api/game")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping("/{match_id}")
    public Game findGameById(@PathVariable("match_id") UUID game_id) { return gameService.findGameById(game_id);}

    @PostMapping
    public void addGame(@RequestBody @Valid Game game){ gameService.addGame(game);}

    @PutMapping("/{match_id}")
    public Game updateGame(@PathVariable("match_id") UUID game_id, @RequestBody @Valid Game game){
        // gameService.updateGame(game_id, game);
        return game;
    }

    @DeleteMapping("/{match_id}")
    public void deleteGame(@PathVariable("match_id") UUID game_id){gameService.deleteGame(game_id);}
}
