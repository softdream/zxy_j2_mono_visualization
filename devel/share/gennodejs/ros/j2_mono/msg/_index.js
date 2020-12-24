
"use strict";

let Obstacles = require('./Obstacles.js');
let Line = require('./Line.js');
let FreeSpacePoints = require('./FreeSpacePoints.js');
let Obstacle = require('./Obstacle.js');
let Contour = require('./Contour.js');
let Polygon = require('./Polygon.js');
let Data = require('./Data.js');
let ImageSpaceInfo = require('./ImageSpaceInfo.js');
let Point = require('./Point.js');
let Rect = require('./Rect.js');
let OBBox2D = require('./OBBox2D.js');
let StructurePerception = require('./StructurePerception.js');
let canFrame = require('./canFrame.js');
let Meta = require('./Meta.js');
let Image = require('./Image.js');
let WorldSpaceInfo = require('./WorldSpaceInfo.js');
let Box3D = require('./Box3D.js');
let Lines = require('./Lines.js');
let odometryFrame = require('./odometryFrame.js');
let PointI = require('./PointI.js');
let Velocity = require('./Velocity.js');
let ImageFail = require('./ImageFail.js');

module.exports = {
  Obstacles: Obstacles,
  Line: Line,
  FreeSpacePoints: FreeSpacePoints,
  Obstacle: Obstacle,
  Contour: Contour,
  Polygon: Polygon,
  Data: Data,
  ImageSpaceInfo: ImageSpaceInfo,
  Point: Point,
  Rect: Rect,
  OBBox2D: OBBox2D,
  StructurePerception: StructurePerception,
  canFrame: canFrame,
  Meta: Meta,
  Image: Image,
  WorldSpaceInfo: WorldSpaceInfo,
  Box3D: Box3D,
  Lines: Lines,
  odometryFrame: odometryFrame,
  PointI: PointI,
  Velocity: Velocity,
  ImageFail: ImageFail,
};
