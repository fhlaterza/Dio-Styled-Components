import { useState, useEffect, useMemo, useCallback } from 'react';

const Teste = () => {
    
    const [name, setName] = useState('Fernando');
    const [age, setAge] = useState(45);
    

    //useCallback = referencia de função
    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Fernando' ? 'Laterza' : 'Fernando')
    }, []);
   
    const handleChangeAge = useCallback(()=> {
        setAge(prev => prev === 45 ? 50 : 45)
    }, []);
   
    //useMemo = salva referencia em variaveis (const, var, let)
    const calculo = useMemo(() => {
        console.log('Calculou ', age )
        return 10* age;
    }, [age]);

    console.log('renderizou', calculo);

    

    useEffect(() => {
         alert('renderizei')
         return () => {alert('desmontei')}
         }, [name]);

    return (
        <div>
            <p>Nome: {name}</p>
            <br />
            <button onClick={handleChangeName}>Alterar Nome</button>
            <br />
            <br />
            <p>Idade: {age}</p>
            <br />
            <button onClick={handleChangeAge}>Alterar Idade</button>
            <br />
        </div>
    )
}

export { Teste }
