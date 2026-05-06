import { useState, useEffect } from 'react'
import Header from './components/Header'
import { TextField, Button, List, Paper, Container, Stack, ListItem, IconButton, ListItemText } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const [list, setList] = useState<string[]>(localStorage.getItem("shopping-list") ? JSON.parse(localStorage.getItem("shopping-list")!) : [])
  const [userInput, setUserInput] = useState("")

  const handleClick = () => {
    setList([...list, userInput])
    setUserInput("")
  }

  useEffect(() => {
    localStorage.setItem("shopping-list", JSON.stringify(list))
  }, [list])

  const deleteItem = (removeItem: number) => {
    const newList = list.filter((_, index) => index !== removeItem)
    setList(newList)
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Header />
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 2, mb: 3 }}>
          <Stack direction="column" spacing={1}>
            <TextField
              label="What do we need..."
              variant="outlined"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}>
            </TextField>
            <Button variant="contained" onClick={handleClick}>Add to list</Button>
          </Stack>
        </Paper>

        <List>
          {list.map((item, index) =>
            <ListItem key={index} sx={{
              mb: 1,
              bgcolor: 'background.paper',
              borderRadius: 1,
              boxShadow: '1px 1px 1px black',
              '&:hover': { bgcolor: '#fafafa' }
            }}>
              <ListItemText primary={item} />
              <IconButton edge="end" onClick={() => deleteItem(index)}>
                <ClearIcon />
              </IconButton>
            </ListItem>
          )}
        </List>
      </Container>
    </>
  )
}

export default App
