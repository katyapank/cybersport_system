package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Game;
import com.cybersport.cybersportcrudservice.repository.GameRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@AllArgsConstructor
@RequiredArgsConstructor
public class GameService {
    @Autowired
    GameRepository gameRepository;

    public UUID addGame(Game game){ return gameRepository.save(game).getGameId();}
    public void deleteGame (UUID game_id){
        gameRepository.delete(gameRepository.findById(game_id).orElseThrow(()->new IllegalStateException(
                "match with id " + game_id + " does not exists")
        ));
    }
    public Game findGameById(UUID game_id){
        return gameRepository.findById(game_id).orElseThrow(()->new IllegalStateException(
                "match with id " + game_id + " does not exists"));
    }

    @Transactional
    public Game updateGame(UUID game_id, Game game){
        Game gameTemp = gameRepository.findById(game_id).orElseThrow(()-> new IllegalStateException(
                "match with id " + game_id + " does not exists"));
        gameTemp.setGameAddFeatures(game.getGameAddFeatures());
        gameTemp.setGameCommandSize(game.getGameCommandSize());
        gameTemp.setGameGenre(game.getGameGenre());
        gameTemp.setGameName(game.getGameName());
        return gameTemp;
    }
}
