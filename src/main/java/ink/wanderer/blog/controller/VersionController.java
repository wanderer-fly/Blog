package ink.wanderer.blog.controller;

import org.springframework.boot.info.GitProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VersionController {
    private final GitProperties gitProperties;

    public VersionController(GitProperties gitProperties) {
        this.gitProperties = gitProperties;
    }

    @GetMapping("/version")
    public String getVersion() {
        return "git-" + gitProperties.getCommitId();
    }
}
