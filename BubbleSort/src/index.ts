import { NumbersCollection } from "./Collections/NumbersCollection";
import { CharactersCollection } from "./Collections/CharactersCollection";
import { LinkedList } from "./Collections/LinkedList";

//numbers collaction
const numbersCollection = new NumbersCollection([9, 5, 4, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);

//string
const charactersCollection = new CharactersCollection("csdIDSX");
charactersCollection.sort();
console.log(charactersCollection.data);

//linkedList
const linkedList = new LinkedList();
linkedList.add(550);
linkedList.add(343);
linkedList.add(423);
linkedList.add(3);
linkedList.add(10);
linkedList.sort();
linkedList.print();
