// “继续生成10组”按钮
const generateBatch = (count) => {
  let gen = generatorRef.current;

  if (!gen) {
    const p = parseInt(inputP);
    gen = solveSequence(p);
    generatorRef.current = gen;
  }

  const newSolutions = [];
  let done = false;

  for (let i = 0; i < count; i++) {
    const result = gen.next();
    if (result.done) {
      done = true;
      break;
    }
    newSolutions.push(result.value);
  }

  if (newSolutions.length > 0) {
    setSolutions(prev => [...prev, ...newSolutions]);
  }

  if (done) {
    setIsFinished(true);
  }
};