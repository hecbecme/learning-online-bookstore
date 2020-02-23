package com.biaani.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.biaani.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>  {

}
