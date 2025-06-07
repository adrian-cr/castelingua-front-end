import * as React from 'react';
import {Box, Tab, Tabs} from '@mui/material';
import TabBody from './subcomponents/TabBody';

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
  DLE: {
    word: "palabra",
    terms: [
      {
        etymology: "Del lat. parabŏla 'comparación', en lat. tardío 'proverbio', 'parábola', y este del gr. παραβολή parabolḗ.",
        entries: [
          {
            POS: "f.",
            definition: "Unidad lingüística, dotada generalmente de significado, que se separa de las demás mediante pausas potenciales en la pronunciación y blancos en la escritura.",
            exampleSentence: "",
            synonyms: ["vocablo", "término", "voz", "verbo", "dicción", "expresión"],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Representación gráfica de la palabra hablada.",
            exampleSentence: "",
            synonyms: [],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Facultad de hablar.",
            exampleSentence: "",
            synonyms: ["lengua", "lenguaje", "habla"],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Aptitud oratoria.",
            exampleSentence: "",
            synonyms: [],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Empeño que hace alguien de su fe y probidad en testimonio de lo que afirma.",
            exampleSentence: "",
            synonyms: [],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Promesa u oferta.",
            exampleSentence: "",
            synonyms: ["promesa", "compromiso", "juramento", "oferta", "ofrecimiento"],
            antonyms: [],
          },
          {
            POS: "f.",
            definition: "Derecho, turno para hablar en las asambleas políticas y otras corporaciones.",
            exampleSentence: "Pedir, conceder, tener, retirar la palabra; hacer uso de la palabra.",
            synonyms: [],
            antonyms: [],
          },
        ],
        phrases: [
          {
            phrase: "buenas palabras",
            entries: [
              {
                POS: "f. pl.",
                definition: "Expresiones o promesas corteses, dichas con intención de agradar y convencer.",
                exampleSentence: "Al final, todo se quedó en buenas palabras."
              },
            ]
          },
          {
            phrase: "cuatro, o dos, palabras",
            entries: [
              {
                POS: "f. pl.",
                definition: "Manifestación breve.",
                exampleSentence: "Hablar, decir cuatro palabras."
              }
            ]
          },
          {
            phrase: "medias palabras",
            entries: [
              {
                POS: "f. pl.",
                definition: "Palabras que no se pronuncian enteramente por defecto de la lengua.",
                exampleSentence: ""
              },
              {
                POS: "f. pl.",
                definition: "Insinuación embozada, reticencia, aquello que por alguna razón no se dice del todo, sino incompleta y confusamente.",
                exampleSentence: ""
              }
            ]
          }
        ]
      }
    ],
    relatedTerms: [
      ["vocablo", "término", "voz", "verbo", "dicción", "expresión"],
      ["lengua", "lenguaje", "habla"],
      ["promesa", "compromiso", "juramento", "oferta", "ofrecimiento"],
      ["signo", "seña"]
    ]
  },
  DPD: {},
  DAMER: {}
};
const obj = {
  name: "alan"
}


function injectProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ResourceTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...injectProps(0)}/>
          <Tab label="Item Two" {...injectProps(1)} />
          <Tab label="Item Three" {...injectProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TabBody resource={resources.DLE}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
