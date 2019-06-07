import React from 'react'
import {
  Typography,
  Button,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'
import { Delete, PlayArrow } from '@material-ui/icons'
import { Redirect, withRouter } from 'react-router-dom'
import connector from './HomeConnector'
import { constants } from './constants'
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: [
        { id: 1, name: 'First', updated_date: '25/05/2019', machine_quantity: 30 },
        { id: 2, name: 'Second', updated_date: '05/09/2019', machine_quantity: 1 },
      ],
    }
  }

  onClickNew = () => {
    const { user, newGame } = this.props
    newGame(user.id)
  }

  onClickPlay = gameId => {
    const { user, playGame } = this.props
    playGame(user.id, gameId)
  }

  onClickDelete = gameId => {
    const { user, deleteGame } = this.props
    deleteGame(user.id, gameId)
  }

  render() {
    const { user, game } = this.props
    if (!user || !user.id) return <Redirect to="/" />
    if (game && game.id) return <Redirect to="/game" />
    const { games } = this.state
    return (
      <div component_name="home" className="home-container">
        <Grid
          className="home-margin"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid className="home-margin" container direction="row" alignItems="center" spacing={1}>
            <Grid item xs={6}>
              <Typography className="home-title" align="center" variant="h5">
                {constants.title(user.username)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" size="large" fullWidth onClick={this.onClickNew}>
                {constants.create}
              </Button>
            </Grid>
          </Grid>
          <Grid className="home-margin" container direction="row" alignItems="center">
            <Table className="home-table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">{constants.name}</TableCell>
                  <TableCell align="center">{constants.updated_date}</TableCell>
                  <TableCell align="center">{constants.machine_quantity}</TableCell>
                  <TableCell align="center" />
                </TableRow>
              </TableHead>
              <TableBody>
                {games.map(gm => (
                  <TableRow key={gm.id}>
                    <TableCell align="center">{gm.name}</TableCell>
                    <TableCell align="center">{gm.updated_date}</TableCell>
                    <TableCell align="center">{gm.machine_quantity}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" color="secondary">
                        <PlayArrow onClick={() => this.onClickPlay(gm.id)} />
                      </Button>
                      <Button variant="contained" color="primary">
                        <Delete onClick={() => this.onClickDelete(gm.id)} />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withRouter(connector(Home))
