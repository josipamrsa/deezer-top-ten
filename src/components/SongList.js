import React, { useState, useEffect } from 'react';
import Select from "react-select";
import ModalWindow from './ModalWindow';
import trackServer from '../services/fetchTrackData';
import { songListStyle } from '../styles/AppStyles';

const SongList = (props) => {
    const [trackData, setTrackData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [singleTrackData, setSingleTrackData] = useState({
        position: 0,
        title: "",
        artist: { name: "" },
        duration: "0:00"
    });
    const [isSorted, setIsSorted] = useState(false);

    const options = [
        { value: 'ASC', label: 'Ascending' },
        { value: 'DESC', label: 'Descending' }
    ]

    useEffect(() => {
        trackServer.fetchData().then(response => {
            console.log(JSON.parse(response).tracks.data);
            setTrackData(JSON.parse(response).tracks.data);
        }).catch(err => console.log(err));
    }, []);

    const calculateMinuteSecondLength = (seconds) => {
        return `${Math
            .floor(seconds / 60)
            .toString()
            .padStart(2, '0')}:${(seconds - (Math.floor(seconds / 60)) * 60)
                .toString()
                .padStart(2, '0')}`;
    }

    const openModal = (data) => {
        setSingleTrackData(data)
        setIsOpen(true);
    }

    const sortByDuration = (option) => {
        option.value === "ASC" ?
            setTrackData(
                trackData.sort((a, b) =>
                    a.duration > b.duration ?
                        1 :
                        a.duration < b.duration ? -1 : 0)) :
            setTrackData(
                trackData.sort((a, b) =>
                    a.duration < b.duration ?
                        1 :
                        a.duration > b.duration ? -1 : 0))
        setIsSorted(!isSorted);
    }

    return (
        <div style={songListStyle.container}>
            <h1>Deezer Top 10</h1>
            <div style={songListStyle.headers}>
                <p>Artist</p>
                <p>Track</p>
                <Select options={options} onChange={sortByDuration} placeholder="Duration" />
            </div>

            {
                trackData.map(td => {
                    return (
                        <div
                            style={td.position % 2 === 0 ? songListStyle.tableDataEven : songListStyle.tableDataOdd}
                            onClick={() => openModal(td)}
                            key={td.id}>
                            <p>{td.artist.name}</p>
                            <p>{td.title}</p>
                            <p style={songListStyle.durationPosition}>{calculateMinuteSecondLength(td.duration)} </p>
                        </div>)
                })
            }

            <ModalWindow
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                position={singleTrackData.position}
                title={singleTrackData.title}
                artist={singleTrackData.artist.name}
                duration={calculateMinuteSecondLength(singleTrackData.duration)}>
            </ModalWindow>
        </div>
    );
}

export default SongList;