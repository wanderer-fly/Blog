package ink.wanderer.blog.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class IndexController {

    @GetMapping("/")
    public String index(@RequestParam(name = "lang", required = false, defaultValue = "zh_TW") String lang, Model model) {
        model.addAttribute("lang", lang);
        return "index.html";
    }
}
