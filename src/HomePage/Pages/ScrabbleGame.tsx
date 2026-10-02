import { Button } from '../../Components/ui/button';
import { Input } from '../../Components/ui/input';
import { Card, CardContent } from '../../Components/ui/card';
import { SkipForward, Play } from 'lucide-react';
import confetti from 'canvas-confetti';
import { scrambledWordReducer, getIntialState } from './reducer/ScrambleWordsReducer';
import { useEffect, useReducer } from 'react';

const ScrambleWords = () => {
  const [state, dispach] = useReducer(scrambledWordReducer, getIntialState());
  const {
    currentWord,
    errorCounter,
    guess,
    isGameOver,
    maxAllowErrors,
    maxSkips,
    points,
    scrambledWord,
    skipCounter,
    words,
    totalWords,
  } = state;

  useEffect(() => {
    if (points === 0) return;
    confetti({
      particleCount: 100,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, [points]);

  const handleGuessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispach({
      type: 'CHECK_ANSER',
    });
  };

  const handleSkip = () => {
    dispach({ type: 'SKIP_WORD' });
  };

  const handlePlayAgain = () => {
    dispach({ type: 'PLAY_AGAIN', payload: getIntialState() });
  };

  if (words.length === 0) {
    return (
      <div className="min-h-[100svh] bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600 mb-4">No hay palabras para jugar</p>
          <div className="space-y-2 text-gray-800 mb-6">
            <div>Puntaje: {points}</div>
            <div>Errores: {errorCounter}</div>
            <div>Saltos: {skipCounter}</div>
          </div>
          <Button className="min-h-11" onClick={handlePlayAgain}>
            Jugar de nuevo
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100svh] bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Palabras desordenadas
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Desordena las letras para encontrar la palabra!
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl">
          <CardContent className="p-4 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-center text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center justify-center gap-2 flex-wrap">
                Palabra Desordenada
                {isGameOver && (
                  <span className="text-red-500 text-lg sm:text-xl"> {currentWord}</span>
                )}
              </h2>

              <div className="flex justify-center flex-wrap gap-1.5 sm:gap-2 mb-6">
                {scrambledWord.split('').map((letter, index) => (
                  <div
                    key={`${letter}-${index}`}
                    className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl shadow-lg"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards',
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleGuessSubmit} className="mb-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="guess"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Adivina la palabra
                  </label>
                  <Input
                    id="guess"
                    type="text"
                    value={guess}
                    onChange={(e) =>
                      dispach({
                        type: 'SET_GUESS',
                        payload: e.target.value,
                      })
                    }
                    placeholder="Ingresa tu palabra..."
                    className="text-center text-base sm:text-lg font-semibold h-12 border-2 border-indigo-200 text-black focus:border-indigo-500 transition-colors"
                    maxLength={scrambledWord.length}
                    disabled={isGameOver}
                    autoComplete="off"
                    autoCapitalize="none"
                  />
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer w-full min-h-12 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg"
                  disabled={!guess.trim() || isGameOver}
                >
                  Enviar Adivinanza
                </Button>
              </div>
            </form>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 sm:p-4 text-center border border-green-200">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  {points} / {totalWords}
                </div>
                <div className="text-sm text-green-700 font-medium">Puntos</div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-lg p-3 sm:p-4 text-center border border-red-200">
                <div className="text-xl sm:text-2xl font-bold text-red-600">
                  {errorCounter}/{maxAllowErrors}
                </div>
                <div className="text-sm text-red-700 font-medium">Errores</div>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3">
              <Button
                onClick={handleSkip}
                variant="outline"
                className="min-h-11 border-2 bg-purple-500 border-indigo-400 hover:bg-fuchsia-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                disabled={isGameOver || skipCounter >= maxSkips}
              >
                <SkipForward className="w-4 h-4" />
                Saltar ({skipCounter} / {maxSkips})
              </Button>
              <Button
                onClick={handlePlayAgain}
                variant="outline"
                className="min-h-11 border-2 border-indigo-300 bg-purple-500 hover:bg-pink-400 text-white transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4" />
                Jugar de nuevo
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 px-2">
          <p className="text-sm text-gray-500 break-words">
            Desafíate con palabras desordenadas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrambleWords;
