package com.cybersport.cybersportcrudservice.exception;

public class CommandSizeNotMatchedException extends RuntimeException{
    public CommandSizeNotMatchedException(String message) {
        super(message);
    }
}
