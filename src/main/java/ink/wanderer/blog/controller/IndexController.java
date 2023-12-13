package ink.wanderer.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.info.GitProperties;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class IndexController {
    private final GitProperties gitProperties;

    @Autowired
    public IndexController(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }


    @GetMapping("/")
    public String index(@RequestParam(name = "lang", required = false, defaultValue = "en_US") String lang, Model model) {

        lang = (lang.equals("en_US") ? "English" : "正體中文"); // Debug

        String updateTime = gitProperties.getCommitTime().toString();
        String version = "git-" + gitProperties.getShortCommitId();

        model.addAttribute("lang", lang);
        model.addAttribute("version", version);
        model.addAttribute("update", updateTime);

        return "index.html";
    }
}
