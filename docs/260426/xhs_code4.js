// “搜索所有数列”按钮
const searchAll = async () => {
  if (isSearchingAll) return;

  setIsSearchingAll(true);
  let gen = generatorRef.current;

  if (!gen) {
    const p = parseInt(inputP);
    gen = solveSequence(p);
    generatorRef.current = gen;
  }

  const BATCH_SIZE = 50;

  while (true) {
    const batch = [];
    let done = false;

    for (let i = 0; i < BATCH_SIZE; i++) {
      const result = gen.next();
      if (result.done) {
        done = true;
        break;
      }
      batch.push(result.value);
    }

    if (batch.length > 0) {
      setSolutions(prev => [...prev, ...batch]);
    }

    if (done) {
      setIsFinished(true);
      break;
    }

    // 让出主线程， UI 才能更新，用户才能看到每次增加 50 个解的效果
    await new Promise(resolve => setTimeout(resolve, 0));
  }

  setIsSearchingAll(false);
};