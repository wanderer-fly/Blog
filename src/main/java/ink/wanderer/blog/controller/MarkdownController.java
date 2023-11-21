package ink.wanderer.blog.controller;

import ink.wanderer.blog.service.MarkdownService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/markdown")
public class MarkdownController {

    @Autowired
    private MarkdownService markdownService;

    @GetMapping("load")
    public String loadMarkdown(@RequestParam String p, Model model) {
        try {
            String html = markdownService.convertToHtml(p);
            model.addAttribute("markdownHtml", html);
            return "index :: #mdcont";
        } catch (Exception exception) {
            exception.printStackTrace();
            return exception.getMessage();
        }
    }
}
