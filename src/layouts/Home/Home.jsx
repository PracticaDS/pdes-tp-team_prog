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
import CreateGame from './CreateGame'
import { constants } from './constants'
import './Home.css'

class Home extends React.Component {
  onClickNew = game => {
    const { user, newGame } = this.props
    newGame(user.id, game)
  }

  onClickPlay = gameId => {
    const { user, playGame } = this.props
    playGame(user.id, gameId)
  }

  onClickDelete = gameId => {
    const { user, deleteGame } = this.props
    deleteGame(user.id, gameId)
  }

  createGames = games =>
    games.map(game => ({
      id: game._id,
      name: game.name,
      updated_date: game.updated_at,
      current_currency: game.currency,
    }))

  render() {
    const { user, game } = this.props
    if (!user || !user.id) return <Redirect to="/" />
    if (game && game.id) return <Redirect to="/game" />
    const games = this.createGames(user.games)
    return (
      <div component_name="home" className="home-container">
        <Grid
          className="home-margin"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            className="home-margin"
            container
            direction="column"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={6}>
              <Typography className="home-title" align="center" variant="h5">
                {constants.title(user.username)}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <CreateGame onCreate={this.onClickNew} />
            </Grid>
          </Grid>
          <Grid className="home-margin" container direction="row" alignItems="center">
            <Table className="home-table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">{constants.name}</TableCell>
                  <TableCell align="center">{constants.updated_date}</TableCell>
                  <TableCell align="center">{constants.current_currency}</TableCell>
                  <TableCell align="center">{constants.actions}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {games.map(gm => (
                  <TableRow key={gm.id}>
                    <TableCell align="center">{gm.name}</TableCell>
                    <TableCell align="center">{gm.updated_date}</TableCell>
                    <TableCell align="center">{gm.current_currency}</TableCell>
                    <TableCell className="buttons" align="center">
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
