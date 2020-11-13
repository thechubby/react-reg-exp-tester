import * as React from 'react';

interface StateInterface {

}

export class RegExpTester extends React.Component {

    constructor(props: StateInterface) {
        super(props);
        this.demoMatchClick = this.demoMatchClick.bind(this)
        this.demoShowMatchClick = this.demoShowMatchClick.bind(this)
    }

    demoMatchClick() {
        let re = new RegExp('document.demoMatch.regex.value');
        let m = re.exec('document.demoMatch.subject.value');
        if (m == null) {
            alert("Не найдено");
        }
    };

    demoShowMatchClick() {
        let re = new RegExp('document.demoMatch.regex.value', "g");
        let m = re.exec('document.demoMatch.subject.value');
        if (m == null) {
            alert("Не найдено");
        } else {
            let s = "Найдено на позиции " + m.index + ":\n";
            for (let i = 0; i < m.length; i++) {
                s = s + m[i] + "\n";
            }
            alert(s);
        }
    }

    render() {

        return(
            <div>
                Regexp: <input type="text" name="regex" value="\bt[a-z]+\b>"/>
                <br/>
                Subject string: <input type="text" name="subject" value="Это тест JavaScript RegExp объектов"/>
                <input type="submit" value="Проверить совпадения" onClick={() => this.demoMatchClick()}/>
                <input type="submit" value="Показать совпадения" onClick={() => this.demoShowMatchClick()}/>
                <br/>
                На что заменять: <input type="text" name="replacement" value="replaced"/>
                Результат: <input type="text" name="result" value=""/>
            </div>)
    }
    }

export default RegExpTester;