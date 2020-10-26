import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//gets the library setup and working
Enzyme.configure({
    adapter: new Adapter()
});