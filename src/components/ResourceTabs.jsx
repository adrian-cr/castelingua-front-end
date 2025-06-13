import * as React from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import DLEtab from './subcomponents/resultsTabs/DLEtab';
import DPDtab from "./subcomponents/resultsTabs/DPDtab";
import GTGtab from "./subcomponents/resultsTabs/GTGtab";
import { hasData } from '../modules/checkers';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const resources = {
    "data": [
        {
            "word": "perro, rra",
            "etymology": "De or. inc.",
            "entries": [
                {
                    "entryNum": "1.",
                    "POS": "m. y f.",
                    "definition": "Mamífero doméstico de la familia de los cánidos, de tamaño, forma y pelaje muy diversos, según las razas, que tiene olfato muy fino y es inteligente y muy leal a su dueño.",
                    "endAbbrs": [
                        "U. en m. ref. a la especie."
                    ],
                    "synonyms": [
                        "can1",
                        "chucho1",
                        "tuso1",
                        "pulguiento"
                    ]
                },
                {
                    "entryNum": "2.",
                    "POS": "m. y f.",
                    "definition": "Persona despreciable.",
                    "startAbbrs": [
                        "coloq."
                    ],
                    "endAbbrs": [
                        "U. t. c. insulto."
                    ]
                },
                {
                    "entryNum": "3.",
                    "POS": "m.",
                    "definition": "Mal o daño que se ocasiona a alguien al engañarle en un acuerdo o pacto."
                },
                {
                    "entryNum": "4.",
                    "POS": "m.",
                    "definition": "Hombre tenaz, firme y constante en alguna opinión o empresa.",
                    "startAbbrs": [
                        "desus."
                    ],
                    "endAbbrs": [
                        "Era u. t. c. adj."
                    ]
                },
                {
                    "entryNum": "5.",
                    "POS": "m.",
                    "definition": "Tanto o piedra pequeña del juego del león.",
                    "startAbbrs": [
                        "Chile."
                    ]
                },
                {
                    "entryNum": "6.",
                    "POS": "f.",
                    "definition": "prostituta.",
                    "synonyms": [
                        "prostituta"
                    ]
                },
                {
                    "entryNum": "7.",
                    "POS": "f.",
                    "definition": "Rabieta de niño.",
                    "startAbbrs": [
                        "coloq."
                    ],
                    "synonyms": [
                        "rabieta",
                        "berrinche",
                        "pataleta",
                        "emperro"
                    ]
                },
                {
                    "entryNum": "8.",
                    "POS": "f.",
                    "definition": "tema (‖ idea fija).",
                    "startAbbrs": [
                        "coloq."
                    ],
                    "synonyms": [
                        "obsesión",
                        "manía",
                        "fijación",
                        "tema"
                    ]
                },
                {
                    "entryNum": "9.",
                    "POS": "f.",
                    "definition": "Dinero, riqueza.",
                    "startAbbrs": [
                        "coloq."
                    ],
                    "endAbbrs": [
                        "U. m. en pl."
                    ],
                    "exampleSentence": "Tener perras.",
                    "synonyms": [
                        "dinero",
                        "moneda",
                        "efectivo",
                        "numerario",
                        "pasta",
                        "cuartos",
                        "guita",
                        "moni",
                        "tela1",
                        "lana",
                        "parné",
                        "pelas",
                        "plata",
                        "billete",
                        "morlacos",
                        "feria",
                        "reales",
                        "pisto",
                        "bolas",
                        "mango3",
                        "guano2",
                        "maracandacas"
                    ]
                },
                {
                    "entryNum": "10.",
                    "POS": "f.",
                    "definition": "Embriaguez, borrachera.",
                    "startAbbrs": [
                        "coloq."
                    ],
                    "synonyms": [
                        "borrachera",
                        "embriaguez",
                        "trompa",
                        "mona",
                        "moña",
                        "cogorza",
                        "melopea",
                        "merluza",
                        "curda",
                        "castaña",
                        "cohete",
                        "bomba",
                        "peludo",
                        "cura"
                    ]
                },
                {
                    "entryNum": "11.",
                    "POS": "f.",
                    "definition": "chascarrillo.",
                    "startAbbrs": [
                        "Hond."
                    ],
                    "synonyms": [
                        "chascarrillo",
                        "chascarro",
                        "chiste",
                        "anécdota"
                    ]
                },
                {
                    "entryNum": "12.",
                    "POS": "adj. coloq.",
                    "definition": "Dicho de una cosa: Muy mala o indigna.",
                    "exampleSentence": "Vida perra."
                },
                {
                    "entryNum": "13.",
                    "POS": "adj.",
                    "definition": "Dicho de una persona: Enojada o de mal genio.",
                    "startAbbrs": [
                        "El Salv."
                    ]
                }
            ],
            "phrases": [
                {
                    "phrase": "perra chica",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "f. coloq.",
                            "definition": "Moneda española de cobre o aluminio que valía cinco céntimos de peseta."
                        }
                    ]
                },
                {
                    "phrase": "perra gorda, o perra grande",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "f. coloqs.",
                            "definition": "Moneda española de cobre o aluminio que valía diez céntimos de peseta."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra alano, na",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de raza cruzada, que se considera producida por la unión del dogo y el lebrel. Es corpulento y fuerte, tiene grande la cabeza, las orejas caídas, el hocico romo y arremangado, la cola larga y el pelo corto y suave."
                        }
                    ]
                },
                {
                    "phrase": "perro albarraniego",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro de ganado trashumante."
                        }
                    ]
                },
                {
                    "phrase": "perro alforjero",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro de caza enseñado a quedarse en el rancho guardando las alforjas."
                        }
                    ]
                },
                {
                    "phrase": "perro ardero",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro que caza ardillas."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra braco, ca",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro perdiguero."
                        },
                        {
                            "entryNum": "2.",
                            "POS": "m. y f.",
                            "definition": "perro pequeño y fino con el hocico quebrado."
                        }
                    ]
                },
                {
                    "phrase": "perro bucero",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "Sabueso de hocico negro."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra caniche",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de compañía de pequeño tamaño con pelo denso y rizoso y orejas caídas."
                        }
                    ]
                },
                {
                    "phrase": "perro chico",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. coloq.",
                            "definition": "perra chica."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra chihuahua",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de tamaño pequeño y sin pelo."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra chino, na",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que carece completamente de pelo y tiene las orejas pequeñas y rectas, el hocico pequeño y puntiagudo y el cuerpo grueso y de color oscuro."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra cobrador, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que tiene la habilidad de traer a su amo el animal que cae al tiro, o de coger el que huye malherido."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra danés, sa",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que participa de los caracteres de lebrel y mastín."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de aguas",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de una raza que se cree originaria de España, con cuerpo grueso, cuello corto, cabeza redonda, hocico agudo, orejas caídas, y pelo largo, abundante, rizado y generalmente blanco. Es muy inteligente y se distingue por su aptitud para nadar."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de ajeo",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro perdiguero acostumbrado a acosar tanto a las perdices, que las hace ajear antes de levantar el vuelo."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de ayuda",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro enseñado a socorrer y defender a su amo."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de busca",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que sirve para seguir la caza.",
                            "startAbbrs": [
                                "Cineg."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de casta",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que no es cruzado."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de lanas",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de aguas."
                        },
                        {
                            "entryNum": "2.",
                            "POS": "m. y f.",
                            "definition": "perro faldero (‖ perro pequeño)."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de muestra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que se para al ver u olfatear la pieza de caza, como mostrándosela al cazador."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de postura",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de muestra."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de presa",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro con instinto natural para aferrar con fuerza a su presa, y que se emplea para caza, guarda y defensa."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de punta y vuelta",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "Entre cazadores, perro que hace punta o muestra la caza y toma después la vuelta para cogerla cara a cara."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra de Terranova",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de aguas, de gran tamaño, pelo largo, sedoso y ondulado, de color blanco con grandes manchas negras, y cola algo encorvada hacia arriba. Tiene los pies palmeados a propósito para nadar, y es muy inteligente."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra dogo, ga",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de cuerpo y cuello gruesos y cortos, pecho ancho, cabeza redonda, frente cóncava, hocico obtuso, labios gordos, cortos en el centro y colgantes por ambos lados, orejas pequeñas con la punta doblada, patas muy robustas, y pelaje generalmente leonado, corto y recio. Es animal pesado, de fuerza y valor extraordinarios, y se utiliza para la defensa de las propiedades, para las cazas peligrosas y para luchar contra las fieras."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra faldero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que por ser pequeño puede estar en las faldas de las mujeres."
                        },
                        {
                            "entryNum": "2.",
                            "POS": "m. coloq.",
                            "definition": "Persona que acompaña a otra de manera asidua y servil.",
                            "endAbbrs": [
                                "U. m. en dim."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "perro, rra galgo, ga",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro muy ligero, con la cabeza pequeña, los ojos grandes, el hocico puntiagudo, las orejas delgadas y colgantes, el cuerpo delgado y el cuello, la cola y las patas largas."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra gozque",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro pequeño muy sentido y ladrador."
                        }
                    ]
                },
                {
                    "phrase": "perro guion",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro delantero de la jauría."
                        }
                    ]
                },
                {
                    "phrase": "perro jateo",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro raposero."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra labrador, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de muestra, empleado habitualmente como lazarillo de ciegos y como ayuda de policías y bomberos."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra lebrel",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que se distingue en tener el labio superior y las orejas caídas, el hocico recio, el lomo recto, el cuerpo largo y las piernas retiradas atrás. Se le dio este nombre por ser muy apto para la caza de las liebres."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra lebrero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que sirve para cazar liebres."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra lucharniego, ga",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro adiestrado para cazar de noche."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra lulú",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de compañía de tamaño mediano, color blanco, pelo largo y abundante, hocico puntiagudo y orejas rectas."
                        }
                    ]
                },
                {
                    "phrase": "perro marino",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "cazón1."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra mastín, na",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro grande, fornido, de cabeza redonda, orejas pequeñas y caídas, ojos encendidos, boca rasgada, dientes fuertes, cuello corto y grueso, pecho ancho y robusto, manos y pies recios y nervudos, y pelo largo, algo lanoso. Es muy valiente y leal, y el mejor para la guarda de los ganados."
                        }
                    ]
                },
                {
                    "phrase": "perro mudo",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "mapache."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra pachón, na",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de raza muy parecida a la del perdiguero, pero con las piernas más cortas y torcidas, la cabeza redonda y la boca muy grande."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra pastor, ra alemán, na",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro robusto, de orejas rectas, pelaje espeso y gran fortaleza, muy apreciado por su inteligencia, por lo que se utiliza a menudo como perro guardián y perro policía."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra perdiguero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de talla mediana, con cuerpo recio, cuello ancho y fuerte, cabeza fina, hocico saliente, labios colgantes, orejas muy grandes y caídas, patas altas y nervudas, cola larga y pelaje corto y fino. Es muy apreciado para la caza por lo bien que olfatea y sigue las pistas."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra podenco, ca",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de cuerpo algo menor, pero más robusto que el del lebrel, con la cabeza redonda, las orejas tiesas, el lomo recto, el pelo medianamente largo, la cola enroscada y las manos y pies pequeños, pero muy fuertes. Es poco ladrador y sumamente sagaz y ágil para la caza, por su gran vista, olfato y resistencia."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra policía",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro adiestrado para descubrir y perseguir aquello que se desea capturar."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra quitador, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro que está enseñado a quitar la caza a los otros para que no la despedacen o se la coman, y traerla a la mano."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra raposero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de unos dos pies de altura, de pelo corto y de orejas grandes, caídas y muy dobladas. Se emplea en la caza de montería y especialmente en la de zorros."
                        }
                    ]
                },
                {
                    "phrase": "perro rastrero",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro de caza, que la busca por el rastro."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra sabueso, sa",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "Podenco algo mayor que el común y de olfato muy fino."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra terrier",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de origen británico, que incluye varias razas, utilizado antiguamente para la caza de conejos y zorros, y hoy como perro de compañía."
                        }
                    ]
                },
                {
                    "phrase": "perro tomador",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m.",
                            "definition": "perro que coge bien la pieza."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra ventor, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro de caza, que sigue a esta por el olfato y el viento."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra viejo, ja",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "Persona sumamente cauta, advertida y prevenida por la experiencia.",
                            "startAbbrs": [
                                "coloq."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "perro, rra zarcero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro pequeño y corto de pies, que entra con facilidad en las zarzas a buscar la caza."
                        }
                    ]
                },
                {
                    "phrase": "perro, rra zorrero, ra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "m. y f.",
                            "definition": "perro raposero."
                        }
                    ]
                },
                {
                    "phrase": "a otro perro con ese hueso",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "expr.",
                            "definition": "para repeler a quien propone artificiosamente algo incómodo o desagradable, o cuenta algo que no debe creerse.",
                            "startAbbrs": [
                                "coloq.",
                                "U."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "atar los perros con longaniza",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "para alabar, casi siempre con ironía, la abundancia o la esplendidez.",
                            "startAbbrs": [
                                "U."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "como el perro y el gato",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. adv. coloq.",
                            "definition": "para explicar el aborrecimiento mutuo que se tienen algunos.",
                            "startAbbrs": [
                                "U."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "dar perro muerto",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "dar perro."
                        }
                    ]
                },
                {
                    "phrase": "echar, o soltar los perros a alguien",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "locs. verbs. coloqs.",
                            "definition": "Vituperarle, echarle una bronca."
                        }
                    ]
                },
                {
                    "phrase": "estar como los perros en misa",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "Estar fuera de lugar, estorbar."
                        }
                    ]
                },
                {
                    "phrase": "hinchar el perro",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "Dar a lo que se dice o hace proporciones exageradas."
                        }
                    ]
                },
                {
                    "phrase": "irle a alguien como a los perros en misa",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "Sobrevenirle percances e infortunios, irle muy mal.",
                            "startAbbrs": [
                                "Col."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "la perra le parirá lechones",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "expr.",
                            "definition": "para dar a entender que todo le sale bien a quien tiene buena suerte.",
                            "startAbbrs": [
                                "coloq.",
                                "U."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "meado, da por los perros",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. adj.",
                            "definition": "Dicho de una persona: Que suele tener muy mala suerte.",
                            "startAbbrs": [
                                "Cuba y Ur."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "morir alguien como un perro",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb.",
                            "definition": "Morir sin dar señales de arrepentimiento."
                        },
                        {
                            "entryNum": "2.",
                            "POS": "loc. verb.",
                            "definition": "Morir solo, abandonado, sin ayuda alguna."
                        }
                    ]
                },
                {
                    "phrase": "soltar alguien la perra",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb.",
                            "definition": "Gloriarse o jactarse de algo antes de lograrlo, especialmente cuando está expuesto a perderse o no conseguirse."
                        }
                    ]
                },
                {
                    "phrase": "todo junto, como al perro los palos",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "expr.",
                            "definition": "para significar que todos los males le han venido a alguien de una vez.",
                            "startAbbrs": [
                                "U."
                            ]
                        },
                        {
                            "entryNum": "2.",
                            "POS": "expr.",
                            "definition": "para decir que llegará el día en que alguien tenga que pagar todos los males o daños que ha hecho.",
                            "startAbbrs": [
                                "U."
                            ]
                        }
                    ]
                },
                {
                    "phrase": "tratar a alguien como a un perro",
                    "entries": [
                        {
                            "entryNum": "1.",
                            "POS": "loc. verb. coloq.",
                            "definition": "Maltratarlo, despreciarlo."
                        }
                    ]
                }
            ],
            "relatedTerms": [
                "bemba de perro",
                "berza de perro",
                "cabeza de perro",
                "cara de perro",
                "compañón de perro",
                "diente de perro",
                "humor de perros",
                "lengua de perro",
                "pan de perro",
                "pata de perro",
                "perejil de perro",
                "uva de perro",
                "vejiga de perro"
            ]
        }
    ]
}

function injectProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ResourceTabs({wordData}) {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Glosario de Términos Gramaticales&#13;(GTG)" {...injectProps(0)}/>
            <Tab label="Diccionario de la Lengua Española&#13;(DLE)" {...injectProps(1)}/>
            <Tab label="Diccionario Panhispánico de Dudas&#13;(DPD)" {...injectProps(2)}/>
          </Tabs>
        </Box>
        <CustomTabPanel key={0} value={activeTab} index={0}>
          <GTGtab data={wordData?.GTG?.data}/>
        </CustomTabPanel>
        <CustomTabPanel key={1} value={activeTab} index={1}>
          <DPDtab entries={wordData?.DPD?.data?.entries}/>
        </CustomTabPanel>
        <CustomTabPanel key={2} value={activeTab} index={2}>
          <DLEtab terms={wordData?.DLE?.data}/>
        </CustomTabPanel>
      </Box>
    </>


  );
}
