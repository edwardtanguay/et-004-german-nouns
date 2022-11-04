import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { Nouns } from './components/Nouns';
import { INoun } from './interfaces';
import * as tools from './tools';

const nounsUrl = 'https://edwardtanguay.vercel.app/share/germanNouns.json';
const localStorageVariable = 'german-noun-site-app-state';

function App() {
	const [nouns, setNouns] = useState<INoun[]>([]);

	useEffect(() => {
		(async () => {
			const localStorageNouns =
				localStorage.getItem(localStorageVariable);
			let _nouns: INoun[] = [];
			if (localStorageNouns === null) {
				const response = await axios.get(nounsUrl);
				const rawNouns = response.data;
				_nouns = [];
				rawNouns.forEach((rawNoun: any) => {
					const _noun: INoun = {
						...rawNoun,
						isOpen: false,
						isLearned: false
					};
					_nouns.push(_noun);
				});
				_nouns = tools.randomizeArray(_nouns);
			} else {
				_nouns = JSON.parse(localStorageNouns);
			}
			setNouns(_nouns);
		})();
	}, []);

	const handleReset = () => {
		localStorage.removeItem(localStorageVariable);
		window.location.reload();
	}

	return (
		<div className="App">
			<h1>German Noun Site</h1>
			<p>
				You have learned{' '}
				{nouns.reduce(
					(total, noun) => total + (noun.isLearned ? 1 : 0),
					0
				)}{' '}
				of {nouns.length} nouns. <button onClick={handleReset}>Reset</button>
			</p>
			<Nouns nouns={nouns} setNouns={setNouns} />
		</div>
	);
}

export default App;
