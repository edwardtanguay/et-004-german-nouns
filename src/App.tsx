import { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';

interface INoun {
	article: string;
	singular: string;
	plural: string;
	isOpen: boolean;
}

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
					isOpen: false
				};
				_nouns.push(_noun);
			});
			setNouns(_nouns);
		})();
	}, []);

	const handleToggleFlashcard = (noun: INoun) => {
		noun.isOpen = !noun.isOpen;
    // setNouns(prev => prev = ...prev, noun.isOpen)
    setNouns([...nouns]);
    // setNouns(nouns);
	};

	return (
		<div className="App">
			<h1>German Noun Site</h1>
			<p>There are {nouns.length} nouns.</p>
			<div className="nouns">
				{nouns.map((noun) => {
					return (
						<div className="noun" key={noun.singular}>
							<div
								className="front"
								onClick={() => handleToggleFlashcard(noun)}
							>
								{noun.singular}
							</div>
							{noun.isOpen && (
								<div className="back">
									{noun.article} {noun.singular}
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
