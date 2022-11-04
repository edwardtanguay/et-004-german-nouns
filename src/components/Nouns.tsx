import { INoun } from '../interfaces';

interface IProps {
	nouns: INoun[];
	setNouns: any;
}

export const Nouns = (props: IProps) => {
	const {nouns, setNouns} = props;

	const handleToggleFlashcard = (noun: INoun) => {
		noun.isOpen = !noun.isOpen;
		// setNouns(prev => prev = ...prev, noun.isOpen)
		setNouns([...nouns]);
		// setNouns(nouns);
	};

	return (
		<div className="nouns">
			{nouns.map((noun: INoun) => {
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
	);
};
