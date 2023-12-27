-- SQLBook: Code

CREATE DATABASE afac_express;

USE afac_express;

DROP TABLE IF EXISTS artist;

CREATE TABLE
    artist (
        id int primary key NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        description varchar(500) NOT NULL,
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO artist (name, description)
VALUES 
    ('Lara Sousa', 'Lara Sousa est une cinéaste et artiste numérique mozambicaine. ... (description continues)'),
    ('Deepa Bauhadoor', 'Née à Maurice en 1976, elle passe toute son enfance à Petite Julie ... (description continues)'),
    ('Mahefa Dimbiniaina Randrianarivelo', 'Mahefa Dimbiniaina Randrianarivelo, né à Antananarivo en 1991, ... (description continues)'),
    ('Mathilde Neri', 'Née en 1982 à Noyon (France), Mathilde Neri est une artiste visuelle du monde hybride ... (description continues)');


DROP TABLE IF EXISTS artwork;

CREATE TABLE
    artwork (
        id int primary key NOT NULL AUTO_INCREMENT,
        title varchar(200) UNIQUE NOT NULL,
        image varchar(500) NOT NULL,
        dimention varchar(100) DEFAULT NULL,
        creation_place varchar(255) DEFAULT NULL,
        artist_id int DEFAULT NOT NULL,
        CONSTRAINT fk_artwork_artist FOREIGN KEY (artist_id) REFERENCES artist(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    artwork (
        title,
        image,
        dimention,
        creation_place,
        artist_id
    )
VALUES (
        'Tirem nos tudo mas deixem nos a música... Quando eu nasci era meio dia e o sol brillava [...] regressaremos, sombrias, corpos fluídos de feridas incuráveis',
        'https://i.postimg.cc/tCL5xcpm/1-Tirem-Nos-Tudo-Mas-Deixem-Nosamusica-Quandoeu-Nasci-Era-Meio-Diaeo-Sol-Brillava-regressaremos-Sombrias-Corpo.jpg',
        '-',
        '-',
        '1'
    ), (
        'Sementes e imagens',
        'https://i.postimg.cc/1XMYcrRY/2-Sementes-EImagens.jpg',
        '-',
        '-',
        '1'
    ), (
        'Quando eu nasci era...',
        'https://i.postimg.cc/Nfs0ss3g/3-Quando-Eu-Nasci-Era.jpg',
        '-',
        '-',
        '1'
    ), (
        '... era meio dia',
        'https://i.postimg.cc/02SCvqw2/4-Era-Meio-Dia.jpg',
        '-',
        '-',
        '1'
    ), (
        '... e o sol',
        'https://i.postimg.cc/SKPrqQDR/5-EOSol.jpgg',
        '-',
        '-',
        '1'
    ), (
        'Brède chouchou',
        'https://i.postimg.cc/W3fxBPJw/6-Brede-Chouchou.jpg',
        '1200 x 1600',
        'Maurice',
        '2'
    ), (
        'Brède rave',
        'https://i.postimg.cc/7Z94KdXm/7-Brede-Rave.jpg',
        '1200 x 1600',
        'Maurice',
        '2'
    ), (
        'Brède tompouce canvas',
        'https://i.postimg.cc/L6VGSffs/8-Brede-Tompouce-Canvas.jpg',
        '1158 X 1600',
        'Maurice',
        '2'
    ), (
        'Brède tompouce papier',
        'https://i.postimg.cc/JznYWFMT/9-Brede-Tompouce-Papier.jpg',
        '1158 X 1600',
        'Maurice',
        '2'
    ), (
        'Brède songe',
        'Peinture',
        'https://i.postimg.cc/B6rtJkr2/10-Brede-Songe.jpg',
        '4032 x 2172',
        'Maurice',
        '2'
    ), (
        'Analakely, Antananarivo',
        'https://i.postimg.cc/W1YN2xrt/11-Analakely-Antananarivo.jpg',
        '4613 x 4613',
        'Madagascar',
        '3'
    ), (
        'Ancienne banque de Madagascar et des Comores, Toamasina',
        'https://i.postimg.cc/mgJvp4C3/12-Ancienne-Banque-De-Madagascar-Et-Des-Comores-Toamasina.jpg',
        '-',
        'Madagascar',
        '3'
    ), (
        'Cathédrale , Antsirabe',
        'https://i.postimg.cc/YqSTp0xf/13-Cath-drale-Antsirabe.jpg',
        '4771 x 4771',
        'Madagascar',
        '3'
    ), (
        'Gare d\'Antananarivo',
        'https://i.postimg.cc/tJ4vCvFC/14-Cathedrale-Andohalo-Antananarivo.jpg',
        '-',
        'Madagascar',
        '3'
    ), (
        'Gare d\'Antananarivo',
        'https://i.postimg.cc/W1g8jcxw/15-Gare-DAntananarivo.jpg',
        '6906 x 6906',
        'Madagascar',
        '3'
    ), (
        'Il ne reste plus que...',
        'https://i.postimg.cc/0rgSHb5R/16-Il-Ne-Reste-Plus-Que.jpg',
        '-',
        'Réunion',
        '4'
    ), (
        '... réalité fantomatique',
        'https://i.postimg.cc/7LLNzJfm/17-Realite-Fantomatique.jpg',
        '-',
        'Réunion',
        '4'
    ), (
        'Semis du riz. Métamorphosés... sublimés',
        'https://i.postimg.cc/65NL0m87/18-Semis-Du-Riz-Metamorphoses-sublimes.jpg',
        '-',
        'Réunion',
        '4'
    ), (
        '... une vertue intrinsèque l\'est au corps',
        'https://i.postimg.cc/MH0BNznn/19-Une-Vertue-Intrinseque-lest-Au-Corps.jpg',
        '-',
        'Réunion',
        '4'
    ), (
        'Loading drums of alcohol... rêves',
        'Montage',
        'https://i.postimg.cc/QCjCB1MM/20-Loading-Drums-Of-Alcohol-Reves.jpg',
        '-',
        'Réunion',
        '4'
    );

DROP TABLE IF EXISTS users;

CREATE TABLE
    users (
        id int primary key NOT NULL AUTO_INCREMENT,
        firstname varchar(255) NOT NULL,
        lastname varchar(255) NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        passeword varchar(255) DEFAULT NULL,
        birthday varchar(255) DEFAULT NULL,
        is_admin BOOLEAN NOT NULL DEFAULT false
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    artwork (
        firstname,
        lastname,
        email,
        passeword,
        is_admin
    )
VALUES (
        'Ben et nuts',
        'noit',
        'ben.noit@test.fr',
        '1234',
    ) (
        'Nel',
        'ia',
        'nel.ia@test.fr',
        '3456',
    ), (
        'Floflo',
        'BRUNLOURS',
        '12348',
        'azerty@hotmail.fr',
    );

DROP TABLE IF EXISTS artwork_user;

CREATE TABLE
    artwork_user (
        artwork_id int DEFAULT NOT NULL,
        CONSTRAINT fk_user_artist FOREIGN KEY (artwork_id) REFERENCES artwork(id),
        user_id int DEFAULT NOT NULL,
        CONSTRAINT fk_artist_user FOREIGN KEY (user_id) REFERENCES user(id)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;