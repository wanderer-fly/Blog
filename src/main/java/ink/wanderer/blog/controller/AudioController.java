package ink.wanderer.blog.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

@Controller
public class AudioController {
    @Value("$audio.directory")
    private String audioDirectory;

    @GetMapping("/getAudio")
    @ResponseBody
    public String getAudios(@RequestParam String audioFile) {
        try {
            Path path = Path.of(audioDirectory, audioFile);
            byte[] audio = Files.readAllBytes(path);

            return java.util.Base64.getEncoder().encodeToString(audio);
        } catch (IOException ioException) {
//            ioException.printStackTrace();
            return "無法加載文件";
        }
    }
}
