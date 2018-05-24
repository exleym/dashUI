/**
 * Created by exley on 5/18/18.
 */
import { Resource, Tag } from './common/models';
import { Observable } from 'rxjs';

export interface ResourceService {
  resourceUrl: string;

  getResources(): Observable<Resource[]>;

  searchResource(term: string): Observable<Resource[]>;

  createResource(resource: Resource): Observable<Resource>;

  updateResource(resource: Resource): Observable<Resource>;

  deleteResource(resource: Resource): Observable<Resource>;

  tagResource(resource: Resource, tag: string): Observable<Resource>;

  getResourceTags(resource: Resource): Observable<Tag[]>;

  untagResource(resource: Resource, tag: Tag): Observable<Resource>;

}
