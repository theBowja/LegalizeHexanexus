import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-canvas-box',
  templateUrl: './canvas-box.component.html',
  styleUrls: ['./canvas-box.component.scss']
})
export class CanvasBoxComponent implements OnInit {
  ngOnInit(): void {
    this.createThreeJsBox();
  }


  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box');
    if (!canvas) return;
    // const canvasSizes = {
    //   width: window.innerWidth,
    //   height: window.innerHeight,
    // };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, .1, 1000 );
    // const camera = new THREE.OrthographicCamera(-10, 10, 5, -5, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });

    for (let x = -.5; x <= .5; x++) {
      for (let y = -.5; y <= .5; y++) {
        for (let z = -.5; z <= .5; z++) {
          this.addCube(scene, x, y, z);
        }
      }
    }

    for (let x = -.5; x <= .5; x++) {
      for (let y = -.5; y <= .5; y++) {
        this.addCubeFace(scene, -4, x, y);
      }
    }

    for (let x = -.5; x <= .5; x++) {
      for (let y = -.5; y <= .5; y++) {
        this.addCubeFace(scene, x, y, -6);
      }
    }

    const worldAxis = new THREE.AxesHelper(20);
    scene.add(worldAxis);

    camera.position.z = 6;
    camera.position.x = 6;
    camera.position.y = 4;
    camera.lookAt(0, 0, 0)

    // renderer.setClearColor(0xe232222, 1);
    // renderer.setSize(canvasSizes.width, canvasSizes.height);
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render(scene, camera);
  }

  addCube(scene: THREE.Scene, x: number, y: number, z: number) {
    const cubegeo = new THREE.BoxGeometry( .75, .75, .75 );
    cubegeo.translate(x, y, z);
    const cubefacemat = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
    const cube = new THREE.Mesh( cubegeo, cubefacemat );
    scene.add( cube );

    const edgegeo = new THREE.EdgesGeometry( cubegeo );
    const linemat = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wires = new THREE.LineSegments(edgegeo, linemat);
    scene.add(wires);
  }

  addCubeFace(scene: THREE.Scene, x: number, y: number, z: number) {
    const cubegeo = new THREE.BoxGeometry( .05, .75, .75 );
    cubegeo.translate(x, y, z);
    const cubefacemat = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
    const cube = new THREE.Mesh( cubegeo, cubefacemat );
    scene.add( cube );

    const edgegeo = new THREE.EdgesGeometry( cubegeo );
    const linemat = new THREE.LineBasicMaterial({ color: 0x000000 });
    const wires = new THREE.LineSegments(edgegeo, linemat);
    scene.add(wires);
  }
}
