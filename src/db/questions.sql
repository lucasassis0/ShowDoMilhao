BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "questions" (
	"Id"	INTEGER PRIMARY KEY AUTOINCREMENT,
	"Name"	TEXT,
	"Answer1"	TEXT,
	"Answer2"	TEXT,
	"Answer3"	TEXT,
	"Answer4"	TEXT,
	"CorrectAnswer"	TEXT
);
INSERT INTO "questions" VALUES ('Em que estado brasileiro nasceu a apresentadora Xuxa?','RIO DE JANEIRO','RIO GRANDE DO SUL','SANTA CATARINA','GOIÁS','Answer2');
INSERT INTO "questions" VALUES ('Qual é o nome dado ao estado da água em forma de gelo?','LÍQUIDO','SÓLIDO','GASOSO','VAPOROSO','Answer2');
INSERT INTO "questions" VALUES ('Qual era o apelido da cantora Elis Regina?','GAUCHINHA','PAULISTINHA','PIMENTINHA','ANDORINHA','Answer3');
INSERT INTO "questions" VALUES ('Quem é a namorada do Mickey?','MARGARIDA','MINNIE','A PEQUENA SEREIA','OLÍVIA PALITO','Answer2');
INSERT INTO "questions" VALUES ('Qual é o personagem do folclore brasileiro que tem uma perna só?','CUCA','NEGRINHO DO PASTOREIO','BOITATÁ','SACI-PERERÊ','Answer4');
INSERT INTO "questions" VALUES ('Fidel Castro nasceu em que país?','JAMAICA','CUBA','EL SALVADOR','MÉXICO','Answer2');
INSERT INTO "questions" VALUES ('Quem proclamou a república no Brasil em 1889?','DUQUE DE CAXIAS','MARECHAL RONDON','DOM PEDRO II','MARECHAL DEODORO','Answer4');
INSERT INTO "questions" VALUES ('Quem é o patrono do exército brasileiro?','MARECHAL DEODORO','BARÃO DE MAUÁ','DUQUE DE CAXIAS','MARQUÊS DE POMBAL','Answer3');
INSERT INTO "questions" VALUES ('Quem era o apresentador que reprovava os calouros tocando uma buzina?','RAUL GIL','BOLINHA','FLÁVIO CAVALCANTI','CHACRINHA','Answer4');
INSERT INTO "questions" VALUES ('O que era Frankenstein, de Mary Shelley?','MONSTRO','GORILA','PRÍNCIPE','SAPO','Answer1');
INSERT INTO "questions" VALUES ('Qual é o signo do zodíaco de quem nasce no dia do ano-novo?','VIRGEM','AQUÁRIO','CAPRICÓRNIO','ÁRIES','Answer3');
INSERT INTO "questions" VALUES ('Quem fundou a fábrica de automóveis Ford?','HARRISON FORD','GERALD FORD','HENRY FORD','ANNA FORD','Answer3');
INSERT INTO "questions" VALUES ('Qual é a cor que se associa com os grupos ecológicos?','PRETA','VERMELHA','AZUL','VERDE','Answer4');
INSERT INTO "questions" VALUES ('A água ferve a quantos graus centígrados?','200','100','170','220','Answer2');
INSERT INTO "questions" VALUES ('Quando é comemorado o dia da independência do Brasil?','21 DE ABRIL','12 DE OUTUBRO','7 DE SETEMBRO','25 DE DEZEMBRO','Answer3');
INSERT INTO "questions" VALUES ('Qual lugar é também chamado de Santa Sé?','VENEZA','VITÓRIA','VANCOUVER','VATICANO','Answer4');
INSERT INTO "questions" VALUES ('Quem tem por lema a frase: “Sempre alerta”?','MÉDICOS','ESCOTEIROS','BOMBEIROS','POLICIAIS','Answer2');
INSERT INTO "questions" VALUES ('Quem foi o grande amor de Julieta?','ROMEU','ORFEU','HAMLET','IAGO','Answer1');
INSERT INTO "questions" VALUES ('Quantos signos formam o zodíaco?','NOVE','DEZ','ONZE','DOZE','Answer4');
INSERT INTO "questions" VALUES ('Vatapá é uma comida típica de qual estado?','PARANÁ','SANTA CATARINA','SÃO PAULO','BAHIA','Answer4');
INSERT INTO "questions" VALUES ('Como se chama o lugar onde são armazenadas as balas de um revólver?','CANO','TAMBOR','AGULHA','GATILHO','Answer2');
INSERT INTO "questions" VALUES ('Qual personagem da turma da Mônica tem apenas cinco fios de cabelo?','MÔNICA','CEBOLINHA','CASCÃO','MAGALI','Answer2');
INSERT INTO "questions" VALUES ('Qual cantora tinha o apelido de “Ternurinha” na época da jovem guarda?','SILVINHA','WANDERLÉIA','GRETCHEN','MARTINHA','Answer2');
INSERT INTO "questions" VALUES ('O churrasco é considerado uma comida típica de qual estado?','CEARÁ','RIO GRANDE DO SUL','PARÁ','MARANHÃO','Answer2');
INSERT INTO "questions" VALUES ('Qual cantor é o pai da dupla Sandy e Júnior?','LEONARDO','XORORÓ','ZEZÉ DI CAMARGO','CHITÃOZINHO','Answer2');
INSERT INTO "questions" VALUES ('Quem fundou a Microsoft?','SULTÃO DE BRUNEI','AKIO MORITA','BILL GATES','PRÍNCIPE CHARLES','Answer3');
INSERT INTO "questions" VALUES ('Qual é o nome dado ao pneu reserva do carro?','CALOTA','ESTEPE','MACACO','CHAVE DE RODA','Answer2');
INSERT INTO "questions" VALUES ('Qual é o nome do cachorro medroso do Salsicha, dos desenhos animados?','FLOQUINHO','RIN-TIN-TIN','LASSIE','SCOOBY-DOO','Answer4');
INSERT INTO "questions" VALUES ('Quantas dentições naturais tem o ser humano durante a vida?','UMA','DUAS','TRÊS','QUATRO','Answer2');
INSERT INTO "questions" VALUES ('Edinho, filho de Pelé, jogou no Santos em que posição?','ZAGUEIRO','GOLEIRO','ATACANTE','ARMADOR','Answer2');
INSERT INTO "questions" VALUES ('Qual é a pedra preciosa mais dura encontrada na natureza?','ESMERALDA','RUBI','PÉROLA','DIAMANTE','Answer4');
INSERT INTO "questions" VALUES ('Como se chama o lugar onde se guardam vinhos?','ADEGA','BIBLIOTECA','SÓTÃO','SALA','Answer1');
INSERT INTO "questions" VALUES ('Qual cantor ficou conhecido como “o rei do rock”?','FRANK SINATRA','LITTLE RICHARD','ELVIS PRESLEY','RICHIE VALENS','Answer3');
INSERT INTO "questions" VALUES ('Quem é o inimigo do Piu-Piu nos desenhos animados?','FÉLIX','TOM','FRAJOLA','MINGAU','Answer3');
INSERT INTO "questions" VALUES ('Joana Prado é o nome verdadeiro de qual artista?','TIAZINHA','FEITICEIRA','LADY LU','SHEILA MELLO','Answer2');
INSERT INTO "questions" VALUES ('Quantos dias tem um ano bissexto?','364','365','366','367','Answer3');
INSERT INTO "questions" VALUES ('Qual é o réptil que muda de cor conforme o lugar em que está?','SAPO','CAMALEÃO','LAGARTO','JACARÉ','Answer2');
INSERT INTO "questions" VALUES ('Qual é a duração de cada tempo de uma partida de futebol?','45 MINUTOS','90 MINUTOS','120 MINUTOS','150 MINUTOS','Answer1');
INSERT INTO "questions" VALUES ('Onde fica o centro da indústria cinematográfica nos EUA?','NOVA YORK','LAS VEGAS','NEW ORLEANS','HOLLYWOOD','Answer4');
INSERT INTO "questions" VALUES ('Qual era o código da identidade secreta de James Bond?','707','907','008','007','Answer4');
INSERT INTO "questions" VALUES ('Qual é a fruta associada com a cidade de Laranjal?','MELANCIA','LARANJA','MAÇÃ','UVA','Answer2');
INSERT INTO "questions" VALUES ('Quantos centavos equivalem a um real?','DEZ','MIL','CEM','CINQUENTA','Answer3');
INSERT INTO "questions" VALUES ('De acordo com a Bíblia, qual era o “fruto proibido”?','MAMÃO','MAÇÃ','UVA','ABACAXI','Answer2');
INSERT INTO "questions" VALUES ('Como é conhecida a ponte que liga Rio de Janeiro a Niterói?','GOLDEN GATE','RIO-NITERÓI','RIO SÃO FRANCISCO','BROOKLIN','Answer2');
INSERT INTO "questions" VALUES ('Em que ano os portugueses descobriram o Brasil?','1450','1500','1550','1400','Answer2');
INSERT INTO "questions" VALUES ('O que é medido por um termômetro?','LONGITUDE','UMIDADE','TEMPERATURA','LATITUDE','Answer3');
INSERT INTO "questions" VALUES ('O rio Amazonas pertence a qual continente?','AMERICANO','AFRICANO','EUROPEU','ASIÁTICO','Answer1');
INSERT INTO "questions" VALUES ('Quem esculpiu o boneco Pinóquio, no conto de Carlo Lorenzini?','GEPETO','FADA','BRUXA','GIGANTE','Answer1');
INSERT INTO "questions" VALUES ('Qual é a moeda oficial dos Estados Unidos?','ESCUDO','COROA','DÓLAR','LIBRA','Answer3');
INSERT INTO "questions" VALUES ('Qual é o país do tango?','URUGUAI','ARGENTINA','PARAGUAI','ESPANHA','Answer2');
COMMIT;
