package ink.wanderer.blog.service;

import com.vladsch.flexmark.html.HtmlRenderer;
import com.vladsch.flexmark.parser.Parser;
import com.vladsch.flexmark.util.ast.Node;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class MarkdownService {

    public MarkdownService() {}

    // 讀取本地Markdown，可能將被棄用
    private static final String MARKDOWN_DIRECTORY = "./markdown/"; // 這個參數也是和它有關的

    public String getLocalMarkdown(String markdownName) throws IOException {
        Path markdownFile = Paths.get(MARKDOWN_DIRECTORY, markdownName + ".md");
        byte[] markdownBytes = Files.readAllBytes(markdownFile);
        return new String(markdownBytes);
    }

    // 轉換Markdown爲Html
    public String convertToHtml(String markdown) {
        try {
            var markdownContext = getLocalMarkdown(markdown);
            Parser parser = Parser.builder().build();
            Node document = parser.parse(markdownContext);
            HtmlRenderer renderer = HtmlRenderer.builder().build();
            String html = renderer.render(document);
            return html;
        } catch (IOException ioException) {
            return "<h1>Error loading markdown file</h1>";
        }
    }
}
