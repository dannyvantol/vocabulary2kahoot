import React from 'react';
import './App.css';
import VocabularyScreen from "./components/vocabulary-screen/VocabularyScreen";

class App extends React.Component
{
    public render(): React.ReactNode
    {
        return (<VocabularyScreen/>);
    }
}

export default App;
