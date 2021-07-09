# front / back

Étapes pour faire fonctionner le site :

-Tout d'abord, créer la base de données sur PostgresSQL en utilisant le code ci-dessous (1)
-Ensuite, ajouter les identifiants de la base de données dans le fichier config.js
-Sur deux terminaux distincts, aller dans le dossier front sur l'un 
    et back sur l'autre à l'aide des commandes cd front et cd back
-Sur chacun des terminaux entrez la commande npm install
-Enfin, entrez sur les deux terminaux la commande npm start afin de démarrer le site web
Vous pouvez ainsi sur "http://localhost:8080/", utiliser le site.

# (1) Code de création de la base de données :
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE Student(
   IdStudent SERIAL,
   Name VARCHAR(50) NOT NULL,
   Firstname VARCHAR(50) NOT NULL,
   Email VARCHAR(50) NOT NULL,
   Password VARCHAR(500) NOT NULL,
   YearPromotion INT NOT NULL,

   PRIMARY KEY(IdStudent)
);

-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE TABLE Document(
   idDocument SERIAL,
   idAuthor INT NOT NULL,
   Title VARCHAR(50) NOT NULL,
   Adress VARCHAR(500) NOT NULL,
   Size VARCHAR(50) NOT NULL,
   Type VARCHAR(50) NOT NULL,
   Description VARCHAR(500) NOT NULL,
   Promotion VARCHAR(4) NOT NULL,
   ts_vector tsvector,
   PRIMARY KEY(idDocument)
);

commit;

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
