// FUNÇÕES EM ARROW FUNCTION

const swap = (vet, pos1, pos2) => [vet[pos1], vet[pos2]] = [vet[pos2], vet[pos1]];
// Um vetor e duas posições como parâmetro da função, onde o vetor, nas posições originais, é modificado ao final

const shuffle = (vet, n) => {
    //Vetor e número de trocas como parâmetro
    for (let i = 0; i < n; i++) {
        //Laço para efetuar a troca no número de vezes solicitado
      let j = Math.floor(Math.random() * vet.length);
        //Variável aleatória de 'random' mutiplicado por tamanho do vetor e arredondado para baixo por 'floor'
      let k = Math.floor(Math.random() * vet.length);
      [vet[j], vet[k]] = [vet[k], vet[j]];
    }
    return vet;
  };

  const bubble_sort = (vet) => {
    let len = vet.length;
        //guardando o tamanho do vetor
    for (let i = 0; i < len; i++) {
            //primeiro laço vai percorrer todo vetor
      for (let j = 0; j < len - i -1; j++) {
            //segundo laço vai efetuar as comparações e foi otimizado com a comparação: "j < len - i - 1"
        if (vet[j] > vet[j + 1]) {
            //comparando os elementos e efetuando troca para ordenação com variável auxiliar
          let aux = vet[j];
          vet[j] = vet[j + 1];
          vet[j + 1] = aux;
        }
      }
    }
    return vet;
  }  

  const selection_sort = (vet) => {
    let len = vet.length;
    for (let i = 0; i < len; i++) {
      let min = i;
      //guardando o primeiro elemento de iteração do vetor
      for (let j = i + 1; j < len; j++) {
        if (vet[min] > vet[j]) {
            //comparações
          min = j;
        }
      }
      if (min !== i) {
            //troca se min não for igual a i
        let aux = vet[i];
        vet[i] = vet[min];
        vet[min] = aux;
      }
    }
    return vet;
  };  

  const quick_sort = (vet, posiInicial, posiFinal) => {    
    if (posiInicial < posiFinal) {
      let pivo = particiona(vet, posiInicial, posiFinal);
        //Chamada à função de particionamento declarada abaixo desta
      quick_sort(vet, posiInicial, pivo - 1);
      quick_sort(vet, pivo + 1, posiFinal);
    }
    return vet;
  };    
 
const particiona = (vet, posiInicial, posiFinal) => {
  let mid = Math.floor((posiInicial + posiFinal) / 2);
  let median = [vet[posiInicial], vet[mid], vet[posiFinal]].sort()[1];
  let valorPivot = median;
  let i = posiInicial + 1;
  let j = posiFinal;
  while (i <= j) {
      while (i <= j && vet[i] <= valorPivot) {
          i++;
      }
      while (i <= j && vet[j] > valorPivot) {
          j--;
      }
      if (i < j) {
          [vet[i], vet[j]] = [vet[j], vet[i]];
      }
  }
  [vet[posiInicial], vet[j]] = [vet[j], vet[posiInicial]];
  return j;
};
