import React, { FunctionComponent } from 'react';
import { ReactComponent as SoundIcon} from 'app/icons/sound.svg';
import Button from 'app/components/ui/Button';

interface Props {
  word: string
}

const DEFAULT_LANGUAGE = 'en-US';

const UtterButton: FunctionComponent<Props> = ({
  word
}) => {
  if (!word) return null;

  const availableVoices = window.speechSynthesis.getVoices();
  const availableEnglishVoice = availableVoices.find((voice) =>
    voice.lang === DEFAULT_LANGUAGE
  );
  const voice = availableEnglishVoice || availableVoices[0];

  const playPronunciation = () => {
    const utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.voice = voice;
    utter.text = word;
    window.speechSynthesis.speak(utter);
  };

  return (
    <div>
      <Button
        Icon={SoundIcon}
        onClick={playPronunciation}
      />
    </div>
  )
};

export default UtterButton;
