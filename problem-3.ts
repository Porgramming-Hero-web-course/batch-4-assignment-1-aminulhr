{
  function countWordOccurrences(sentence: string, word: string): number {
    const sentenceText = sentence.toLowerCase();
    const sentenceWord = word.toLowerCase();

    const words = sentenceText.split(" ");

    let wordCount = 0;

    words.forEach((currentWord: string) => {
      if (currentWord === sentenceWord) {
        wordCount++;
      }
    });

    return wordCount;
  }

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);
}
