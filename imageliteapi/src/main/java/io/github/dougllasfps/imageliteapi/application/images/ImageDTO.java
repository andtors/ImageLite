package io.github.dougllasfps.imageliteapi.application.images;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

// Serve para definirmos quais informações irão ser transmitidas em JSON (Data Transfer Object)
@Data
@Builder
public class ImageDTO {
    private String url;
    private String name;
    private String extension;
    private Long size;
    private LocalDate uploadDate;
}
