//INTERFACE
export interface ScrambleWordsState{
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

// ARREGLO DE PALABRAS 
const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];


// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};



//Función para devolver valores iniciales a regresar por la función getInitialState
export const getIntialState =():ScrambleWordsState => {

  const shuffleWords = shuffleArray([...GAME_WORDS]);
  return{
  currentWord: shuffleWords[0],
  errorCounter: 0,
  guess: '',
  isGameOver: false,
  maxAllowErrors: 3,
  maxSkips: 3,
  points: 0,
  scrambledWord: scrambleWord(shuffleWords[0]),
  skipCounter: 0,
  words: shuffleWords,
  totalWords: shuffleWords.length,

  }
}

//ACTIONS
export type scrambleWordAction = 
|{type: 'SET_GUESS', payload: string}
|{type: 'CHECK_ANSER'}
|{type: 'SKIP_WORD'}
|{type: 'PLAY_AGAIN'; payload: ScrambleWordsState}




export const scrambledWordReducer = (state:ScrambleWordsState ,action: scrambleWordAction) :ScrambleWordsState =>{
  switch(action.type){
    case 'SET_GUESS':
      return{
        ...state,
        guess: action.payload.trim().toUpperCase(),
      }
      case 'CHECK_ANSER':{
        if(state.guess === state.currentWord){
          const NewWord = state.words.slice(1);
          return{
            ...state,
            words: NewWord,
            points:state.points + 1,
            guess: '',
            currentWord:NewWord[0],
            scrambledWord: scrambleWord(NewWord[0]),

          }
        }
        return{
          ...state,
          guess:'',
          errorCounter: state.errorCounter + 1,
          isGameOver: state.errorCounter + 1 === state.maxAllowErrors
        }
      }
      case 'SKIP_WORD':{

          const upadateWords = state.words.slice(1);

        if(state.skipCounter >= state.maxSkips) return state;

          return{
            ... state,
            skipCounter: state.skipCounter + 1,
            words: upadateWords,
            currentWord: upadateWords[0],
            scrambledWord: scrambleWord(upadateWords[0]),
            guess: '',
          }
      }
    case 'PLAY_AGAIN':
      return action.payload;

      // return getIntialState();


    default:
      return state;
  }
}