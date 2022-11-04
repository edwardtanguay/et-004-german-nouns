import { INoun } from '../interfaces';

interface IProps{
	noun: INoun;
	setNouns: any;
	nouns: INoun[];
}

export const Noun = (props: IProps) => {
	const { noun, setNouns, nouns } = props;

	const handleToggleFlashcard = (noun: INoun) => {
		noun.isOpen = !noun.isOpen;
		setNouns([...nouns]);
	};

	return (
		<div className="noun" key={noun.singular}>
			<div className="front" onClick={() => handleToggleFlashcard(noun)}>
				{noun.singular}
			</div>
			{noun.isOpen && (
				<div className="back">
					{noun.article} {noun.singular}
				</div>
			)}
		</div>
	);
};
