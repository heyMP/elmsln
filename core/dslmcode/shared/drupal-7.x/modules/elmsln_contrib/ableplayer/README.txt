ABLE PLAYER
-----------

CONTENTS OF THIS FILE
---------------------

 * INTRODUCTION
 * REQUIREMENTS
 * INSTALLATION
 * USAGE
 * TOOLS
 * FUTURE ENHANCEMENTS
 * DISCLAIMERS

INTRODUCTION
------------

Current Maintainer: Anna Femath <http://www.drupal.org/user/2220670>

The Able Player Module integrates the Able Player jQuery plugin created by the Terrill Thompson with Drupal.


REQUIREMENTS
------------
Libraries module & dependencies
Modernizr module & dependencies
YouTube Field module & dependencies (only required if you need the player for YouTube Videos)
Ableplayer library
HTML5 Doctype


INSTALLATION
------------

Installing modules is described here -> http://drupal.org/node/895232

1. Download and install the Libraries module including and any dependencies
   https://www.drupal.org/project/libraries

2. Download and install the Modernizr module including and any dependencies
   https://www.drupal.org/project/modernizr

3. If you want to use able player with YouTube videos, then Download and install the YouTube Field Module including and any dependencies
   https://www.drupal.org/project/youtube

4. Download and extract the able player library into the libraries directory (usually "sites/all/libraries").
   URL: https://github.com/ableplayer/ableplayer

5. Rename the Able Player library directory to "ableplayer" (usually looks like "sites/all/libraries/ableplayer")

3. Install the Ableplayer module


USAGE
-----

* Able Player Audio or Able Player Video
    1. Create a field with the field type of "file" & widget type of "file"
    2. Give the field the proper file types
        - Audio File Types - mp3, ogg, vtt
        - Video File Types - webm, mp4, vtt, jpg
    3. Check the box for "Enable Description field"
    4. Change the "Number of values" to "Unlimited"
    5. Under "Manage Display", Change the format of the field to Able Player Audio or Able Player Video
    6. Adjust formatter settings for your field.

    When adding files to your content type, you need to add a description to each file. This description tells the
    module how to that that file, because some files may have the same file type, but need to be treated differently.

    Here are the available options:

    Audio:
        - 'mp3' - mp3 audio file
        - 'ogg' - ogg audio file

    Video:
        - 'mp4' - mp4 video file
        - 'webm' - webm video file
        - 'poster' - Poster frame for video
        - 'chapters' - video chapters

    Audio or Video:
        - 'captions' or 'transcript' - Captions for video, also transcripts for video and audio

    Here is some copy that you can add to your fields as Help text to assist your users.

        Audio:
            <p>Please add a description to your uploaded files as follows:</p>
            <ul>
                <li>'<strong>mp3</strong>' for mp3 audio file</li>
                <li>'<strong>ogg</strong>' for ogg audio file</li>
                <li>'<strong>transcript</strong>' for vtt transcripts or caption file</li>
            </ul>
        Video:
            <p>Please add a description to your uploaded files as follows:</p>
            <ul>
                <li>'<strong>mp4</strong>' for mp4 video file</li>
                <li>'<strong>webm</strong>' for webm video file</li>
                <li>'<strong>poster</strong>' for poster frame jpg file</li>
                <li>'<strong>captions</strong>' for vtt transcripts or caption file</li>
                <li>'<strong>chapters</strong>' for vtt chapters file</li>
            </ul>

* Able Player YouTube
    1. Enable the YouTube Field Module
    2. Create a YouTube field according to that module's directions
    3. Under "Manage Display", Change the format of the field to Able Player YouTube
    4. Adjust formatter settings for your field.

TOOLS
-----

These are just some tools to help you out, just in case.

* Create Captions tool
    -> http://ie.microsoft.com/testdrive/Graphics/CaptionMaker/Default.html
    -> https://msdn.microsoft.com/en-us/library/ie/jj152136(v=vs.85).aspx
* Validate Captions -> https://quuz.org/webvtt/
* Transcode Videos Tool -> http://video.online-convert.com/
* Transcode Audio Tool -> http://audio.online-convert.com/


FUTURE ENHANCEMENTS
-------------------
- Add more options for YouTube Video
- Add more options from Ableplayer Video
- Add more options for Ableplayer Audio
- Add downloadable human readable transcript file
- Support for a fallback player
- Add fallback text for browsers that do not support HTML5

DISCLAIMERS
-----------
- If you want ot upload a downloadable human readable transcript file, you will need to create a separate field
- To use the Youtube formatter you will need the youtube module
- Youtube does not show captions. This is a problem with the ableplayer plugin.
- The JW player fallback is not implemented