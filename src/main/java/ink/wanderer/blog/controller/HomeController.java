package ink.wanderer.blog.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping
    public String home(@RequestParam HttpServletRequest request, @RequestParam Integer page) {
        return "hello, world";
    }
}
