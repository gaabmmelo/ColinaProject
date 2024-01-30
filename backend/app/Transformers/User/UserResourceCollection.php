<?php

namespace App\Transformers\User;
use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Services\ResponseService;

class UserResourceCollection extends ResourceCollection
{
  public function toArray($request) {
    return ['data' => $this->collection];
  }

  public function with($request) {
    return [
      'status' =>true,
      'msg' => 'Listando dados',
      'url' => route('users.index')
    ];
  }

  public function withResponse($request, $response) {
    $response->setStatusCode(200);
  }
}