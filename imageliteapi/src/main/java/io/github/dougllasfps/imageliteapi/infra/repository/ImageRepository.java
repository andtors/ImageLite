package io.github.dougllasfps.imageliteapi.infra.repository;

import io.github.dougllasfps.imageliteapi.domain.entity.Image;
import io.github.dougllasfps.imageliteapi.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import java.util.List;

import static io.github.dougllasfps.imageliteapi.infra.repository.specs.GenericSpecs.conjunction;
import static io.github.dougllasfps.imageliteapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.*;

// Criação de repositório padrão onde iremos extender ao JPA repository, specification e etc...
// onde tem todos os tipos de funções a seres  no banco de dados ou criamos nossa propria query
public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {


    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){

        // SELECT * FROM IMAGE WHERE 1 = 1

        Specification<Image> spec = where(conjunction());

        if(extension != null){
            // AND EXTENSION =  'PNG'
            spec = spec.and(extensionEqual(extension));
        }

        if(StringUtils.hasText(query)){
            // AND ( NAME LIKE 'QUERY' OR TAGS LIKE 'QUERY' )
            // RIVER => %RI% mesmo não sendo exatamente a pesquisa já retorna algo semelhante
            spec = spec.and(anyOf(nameLike(query), tagsLike(query)));
        }

        return findAll(spec);
    }
}
