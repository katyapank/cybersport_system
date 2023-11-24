package com.cybersport.cybersportcrudservice.service;

import com.cybersport.cybersportcrudservice.entity.Game;
import com.cybersport.cybersportcrudservice.repository.GameRepository;
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

    public void addGame(Game game){ gameRepository.save(game);}
    public void deleteGame (UUID game_id){
        gameRepository.delete(gameRepository.findById(game_id).orElseThrow(()->new IllegalStateException(
                "match with id " + game_id + " does not exists")
        ));
    }
    public Game findGameById(UUID game_id){
        return gameRepository.findById(game_id).orElseThrow(()->new IllegalStateException(
                "match with id " + game_id + " does not exists"));
    }


}
