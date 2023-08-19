import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import LoggedIn from './components/state/LoggedIn';
import User from './components/state/User';
import Counter from './components/state/Counter';
import { ThemeContextProvider } from './components/context/ThemeContext';
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User as ContextUser } from './components/context/User'
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import { Counter as ClassCounter } from './components/class/Counter'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List, List1 } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';


function App() {
    const greetProps = {
        name: 'Bruce',
        messageCount: 20,
        isLoggedIn: true
    }
    
    const personProps = {
        first: 'Iron',
        last: 'Man'
    }
    
    const namesList = [
        {
            first: 'Bruce',
            last: 'Wayne'
        },
        {
            first: 'Clark',
            last: 'kent'
        },
        {
            first: 'Princess',
            last: 'Diana'
        }
    ]
  return (
    <div className="App">
          <Greet name={'Wasim'} isLoggedIn={true} />
          <Greet {...greetProps} />
          <Person name={personProps} />
          <PersonList names={namesList} />
          <Status status={'loading'} />
          <Heading> Placeholder Text... </Heading>
          <Oscar>
            <Heading>And the Oscar goes to Leanardo Decaprio!</Heading>
          </Oscar>
          <Button handleClick={( event, id ) => {
              console.log('Button Clicked', event, id)
          }} />
          <Input value='' handleChange={( event ) => {
              console.log('onChange Event', event)
          }} />
          <Container style={{ border: '1px solid green', padding: '1rem', display: 'flex' }} />
          <hr />
          
          <h1>UseState and userReducer</h1>
          <LoggedIn /><br/>
          <User /><br/>
          <Counter />
          <hr />
          
          <h1>useContext</h1>
          <ThemeContextProvider>
              <Box />
          </ThemeContextProvider>
          <h1> useContext - Future Value</h1>
          <UserContextProvider>
              <ContextUser />
          </UserContextProvider>
          <hr />
          
          <h2>useRef & useEffect</h2>
          <DomRef />
          <MutableRef />
          <hr />
          
          <h1>Typescript With Class</h1>
          <ClassCounter message='The count value is' />
          <Private isLoggedIn={true} component={Profile} />
          <hr />
          
          <h1>Generic Props In Typescript</h1>
          <List1
              items={['Batman', 'Superman', 'Wonder Woman']}
              onClick = { (item) => console.log(item) }
          />
          <List1
              items={[ 1, 2, 3 ]}
              onClick = { (item) => console.log(item) }
          />
          <List
              items={[
                  {
                      id: 1,
                      first: 'Bruce',
                      last: 'Wayne'
                  },
                  {
                    id: 2,
                    first: 'Clark',
                    last: 'Kent'
                  },
                  {
                    id: 3,
                    first: 'Princess',
                    last: 'Diana'
                  }
              ]}
              onClick = { (item) => console.log(item) }
          />
          <hr />
          
          <h1>Prop Restriction In Typescript</h1>
          <RandomNumber value={10} isPositive />
          <RandomNumber value={-10} isNegative />
          <RandomNumber value={0} isZero/>
          <hr />
          
          <h1>Prop Template Literals In Typescript</h1>
          <Toast position={'center'} />
          <Toast position={'right-top'} />
          <hr />
          
          <h1>Wrapping HTML ELements In Typescript</h1>
          <CustomButton
              variant={'primary'}
              type={'submit'}
              onClick={() => console.log('Clicked!')}
          > Primary Button</CustomButton>
          <hr />
          
          <h1>Extracting a Components Prop In Typescript</h1>
          <CustomComponent {...greetProps} isLoggedIn={false} />
          <hr />
          
          <h1>Polymorphic Components In Typescript</h1>
          <Text tagName={'h1'} id={'someId'} size='lg' color={'secondary'}> Heading </Text>
          <Text tagName={'p'} size='md' > Paragraph </Text>
          <Text tagName={'label'} htmlFor={'someId'} size='sm' color={'primary'} > Label </Text>
    </div>
  );
}

export default App;
