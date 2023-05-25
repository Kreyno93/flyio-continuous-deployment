package de.neuefische.backend;


import lombok.With;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@With
@Document("Cars")
public record Car(
        @Id
        String id,
        String brand,
        String model
) {
}
