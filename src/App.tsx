import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { Nouns } from './components/Nouns';
import { INoun } from './interfaces';

const nounsUrl = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

function App() {
	const [nouns, setNouns] = useState<INoun[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(nounsUrl);
			const rawNouns = response.data;
			const _nouns: INoun[] = [];
			rawNouns.forEach((rawNoun: any) => {
				const _noun: INoun = {
					...rawNoun,
					isOpen: false,
					isLearned: false
				};
				_nouns.push(_noun);
			});
			setNouns(_nouns);
		})();
	}, []);

	return (
		<div className="App">
			<h1>German Noun Site</h1>
			<p>There are {nouns.length} nouns.</p>
			<Nouns nouns={nouns} setNouns={setNouns}/>
		</div>
	);
}

export default App;
